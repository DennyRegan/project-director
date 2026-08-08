// Server Action: runs on the server when the edit form on the detail page
// is submitted. `'use server'` is what makes that possible — it marks this
// function as callable directly from a <form action={...}> in the browser.

"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";

// Optional fields should be stored as null when left blank, not as "".
function emptyToNull(value: FormDataEntryValue | null): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed === "" ? null : trimmed;
}

export async function updateProject(id: number, formData: FormData) {
  await prisma.project.update({
    where: { id },
    data: {
      name: String(formData.get("name")),
      description: String(formData.get("description")),
      status: String(formData.get("status")),
      purpose: emptyToNull(formData.get("purpose")),
      currentObjective: emptyToNull(formData.get("currentObjective")),
      currentMilestone: emptyToNull(formData.get("currentMilestone")),
      evidenceSoFar: emptyToNull(formData.get("evidenceSoFar")),
      biggestProblem: emptyToNull(formData.get("biggestProblem")),
      nextMilestone: emptyToNull(formData.get("nextMilestone")),
    },
  });

  // Tells Next.js these pages' cached data is now stale, so both the
  // detail page and the list page reflect the edit on next load.
  revalidatePath(`/projects/${id}`);
  revalidatePath("/projects");
}
