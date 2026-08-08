<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project Director

Personal AI portfolio adviser. Helps me decide what to work on,
based on stored evidence rather than how I feel on the day.

## Stack
Next.js 16, TypeScript, Tailwind, Prisma 7 + SQLite (better-sqlite3
adapter). Deploying to Vercel later, swapping to Postgres then.

## How to work with me
I'm learning software engineering from a non-technical background.

- Explain what each file does and why, in plain English.
- Implement the smallest working version, then stop so I can test it.
- Tell me exactly how to test, and what I should expect to see.
- Don't build ahead. No features I haven't asked for.
- Challenge unnecessary complexity, including mine.
- If something breaks, explain what failed and what you think caused
  it before trying fixes. Don't make five speculative changes.

## Not building yet
Auth, multi-agent setups, vector databases, embeddings, RAG,
integrations (GitHub, Vercel, analytics), notifications, billing.