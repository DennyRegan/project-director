// Server component: runs on the server at request time, queries SQLite
// directly via Prisma, and renders the result to HTML. No client-side
// fetch, no API route — the simplest path from database to page.

import Link from "next/link";
import { prisma } from "@/lib/prisma";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1>Projects</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {projects.map((project) => (
          <li
            key={project.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: 8,
              padding: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <h2 style={{ margin: 0, fontSize: "1.1rem" }}>
                <Link href={`/projects/${project.id}`}>{project.name}</Link>
              </h2>
              <span style={{ fontSize: "0.85rem", color: "#666" }}>{project.status}</span>
            </div>
            <p style={{ margin: "0.5rem 0 0" }}>{project.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
