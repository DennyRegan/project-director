// Server Action for the chat page. This is where the actual data flow
// happens:
//
//   question (from the form)
//     -> fetch every project from the database
//     -> format them into plain text
//     -> send both to Claude, with the system prompt from src/lib/claude.ts
//     -> return Claude's answer back to the browser
//
// It runs on the server, so your database and API key never reach the
// browser — the client only ever sees the question it sent and the answer
// that came back.

"use server";

import Anthropic from "@anthropic-ai/sdk";
import { prisma } from "@/lib/prisma";
import { askClaude } from "@/lib/claude";

export type AskState = {
  question: string;
  answer: string | null;
  error: string | null;
};

function formatProjectsForPrompt(
  projects: Awaited<ReturnType<typeof prisma.project.findMany>>,
) {
  return projects
    .map((p) => {
      const lines = [
        `## ${p.name}`,
        `Status: ${p.status}`,
        `Description: ${p.description}`,
      ];
      if (p.purpose) lines.push(`Purpose: ${p.purpose}`);
      if (p.currentObjective) lines.push(`Current objective: ${p.currentObjective}`);
      if (p.currentMilestone) lines.push(`Current milestone: ${p.currentMilestone}`);
      if (p.evidenceSoFar) lines.push(`Evidence so far: ${p.evidenceSoFar}`);
      if (p.biggestProblem) lines.push(`Biggest problem: ${p.biggestProblem}`);
      if (p.nextMilestone) lines.push(`Next milestone: ${p.nextMilestone}`);
      if (p.startDate) lines.push(`Started: ${p.startDate.toDateString()}`);
      lines.push(`Last updated: ${p.updatedAt.toDateString()}`);
      return lines.join("\n");
    })
    .join("\n\n");
}

export async function askProjectDirector(
  _prevState: AskState,
  formData: FormData,
): Promise<AskState> {
  const question = String(formData.get("question") ?? "").trim();

  if (!question) {
    return { question: "", answer: null, error: "Type a question first." };
  }

  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "asc" },
  });
  const projectContext = formatProjectsForPrompt(projects);

  try {
    const answer = await askClaude(question, projectContext);
    return { question, answer, error: null };
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      return {
        question,
        answer: null,
        error: "Claude API key is missing or invalid (check .env.local).",
      };
    }
    if (error instanceof Anthropic.RateLimitError) {
      return {
        question,
        answer: null,
        error: "Rate limited by the Claude API — try again in a moment.",
      };
    }
    if (error instanceof Anthropic.APIError) {
      return { question, answer: null, error: `Claude API error: ${error.message}` };
    }
    return { question, answer: null, error: "Something unexpected went wrong." };
  }
}
