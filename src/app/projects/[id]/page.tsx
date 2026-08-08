// Server component at /projects/[id]. [id] is a "dynamic segment" — the
// folder name in square brackets means this route matches any id, and
// Next.js passes the matched value in via `params`.

import Link from "next/link";
import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { updateProject } from "./actions";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const projectId = Number(id);

  if (!Number.isInteger(projectId)) {
    notFound();
  }

  const project = await prisma.project.findUnique({
    where: { id: projectId },
  });

  if (!project) {
    notFound();
  }

  // Binds this project's id to the action so the form doesn't need a
  // hidden input for it — see Next.js's "Passing additional arguments" guide.
  const updateProjectWithId = updateProject.bind(null, project.id);

  return (
    <main style={{ maxWidth: 640, margin: "0 auto", padding: "2rem 1rem" }}>
      <p>
        <Link href="/projects">&larr; Back to projects</Link>
      </p>
      <h1 style={{ marginBottom: "0.25rem" }}>{project.name}</h1>
      <p style={{ fontSize: "0.85rem", color: "#666", marginTop: 0 }}>
        Last updated {project.updatedAt.toLocaleString()}
      </p>

      <form
        action={updateProjectWithId}
        style={{ display: "grid", gap: "1.25rem", marginTop: "1.5rem" }}
      >
        <Field label="Name" name="name" defaultValue={project.name} />
        <Field
          label="Short description"
          name="description"
          defaultValue={project.description}
          textarea
        />
        <Field label="Status" name="status" defaultValue={project.status} />
        <Field
          label="Purpose"
          name="purpose"
          defaultValue={project.purpose ?? ""}
          textarea
        />
        <Field
          label="Current objective"
          name="currentObjective"
          defaultValue={project.currentObjective ?? ""}
          textarea
        />
        <Field
          label="Current milestone"
          name="currentMilestone"
          defaultValue={project.currentMilestone ?? ""}
          textarea
        />
        <Field
          label="Evidence so far"
          name="evidenceSoFar"
          defaultValue={project.evidenceSoFar ?? ""}
          textarea
        />
        <Field
          label="Biggest problem"
          name="biggestProblem"
          defaultValue={project.biggestProblem ?? ""}
          textarea
        />
        <Field
          label="Next milestone"
          name="nextMilestone"
          defaultValue={project.nextMilestone ?? ""}
          textarea
        />
        <button
          type="submit"
          style={{
            justifySelf: "start",
            padding: "0.5rem 1.25rem",
            borderRadius: 4,
            border: "1px solid #333",
            background: "#333",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </form>
    </main>
  );
}

function Field({
  label,
  name,
  defaultValue,
  textarea,
}: {
  label: string;
  name: string;
  defaultValue: string;
  textarea?: boolean;
}) {
  const fieldStyle = {
    padding: "0.5rem",
    border: "1px solid #ccc",
    borderRadius: 4,
    font: "inherit",
  };

  return (
    <label style={{ display: "grid", gap: "0.25rem" }}>
      <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>{label}</span>
      {textarea ? (
        <textarea
          name={name}
          defaultValue={defaultValue}
          rows={3}
          style={fieldStyle}
        />
      ) : (
        <input name={name} defaultValue={defaultValue} style={fieldStyle} />
      )}
    </label>
  );
}
