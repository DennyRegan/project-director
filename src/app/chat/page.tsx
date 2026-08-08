// The chat page itself. This has to be a Client Component ('use client')
// because it uses useActionState, a React hook that lets a form call a
// Server Action and then re-render with whatever that action returns —
// here, Claude's answer — without a full page reload.

"use client";

import { useActionState } from "react";
import { askProjectDirector, type AskState } from "./actions";

const initialState: AskState = { question: "", answer: null, error: null };

export default function ChatPage() {
  const [state, formAction, pending] = useActionState(
    askProjectDirector,
    initialState,
  );

  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1>Ask Project Director</h1>
      <p style={{ color: "#666" }}>
        Ask about any of your projects. It reads everything currently stored
        before answering.
      </p>

      <form action={formAction} style={{ marginTop: "1.5rem" }}>
        <textarea
          name="question"
          rows={3}
          placeholder="e.g. Should I keep working on The Liverpool Brief?"
          defaultValue={state.question}
          style={{
            width: "100%",
            padding: "0.75rem",
            border: "1px solid #ccc",
            borderRadius: 4,
            font: "inherit",
          }}
        />
        <button
          type="submit"
          disabled={pending}
          style={{
            marginTop: "0.75rem",
            padding: "0.5rem 1.25rem",
            borderRadius: 4,
            border: "1px solid #333",
            background: pending ? "#999" : "#333",
            color: "#fff",
            cursor: pending ? "default" : "pointer",
          }}
        >
          {pending ? "Thinking…" : "Ask"}
        </button>
      </form>

      {state.error && (
        <p style={{ marginTop: "1.5rem", color: "#b00020" }}>{state.error}</p>
      )}

      {state.answer && (
        <div
          style={{
            marginTop: "1.5rem",
            padding: "1rem",
            border: "1px solid #ddd",
            borderRadius: 8,
            whiteSpace: "pre-wrap",
          }}
        >
          {state.answer}
        </div>
      )}
    </main>
  );
}
