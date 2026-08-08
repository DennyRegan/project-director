// Populates the projects table with your current projects.
// Run manually with: npx prisma db seed
// (also runs automatically after `prisma migrate reset`)

import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "../src/generated/prisma/client";

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const projects = [
  {
    name: "The Liverpool Brief",
    description: "Liverpool FC news and transfer briefings.",
    status: "Active",
    startDate: new Date("2026-08-02"),
    currentObjective: "Test distribution.",
    evidenceSoFar:
      "92 visits, 222 page views, 3 followers, no distribution attempted until 7 Aug.",
  },
  {
    name: "Project Compound",
    description: "Personal habit, nutrition and training tracker.",
    status: "Active",
    currentMilestone: "In testing ahead of App Store release.",
    nextMilestone: "App Store release, expected early September.",
  },
  {
    name: "AI Development Coach",
    description: "Teaches AI fundamentals to people from a non-technical background.",
    status: "Active",
    purpose: "Low priority — a learning vehicle rather than a main project.",
  },
  {
    name: "Personal site",
    description: "One-page portfolio linking to my projects.",
    status: "Live",
    startDate: new Date("2026-08-07"),
    currentMilestone: "Built and deployed 7 Aug.",
  },
  {
    name: "Project Director",
    description: "This app.",
    status: "Active",
    startDate: new Date("2026-08-07"),
  },
  {
    name: "AI Code Reviewer",
    description: "Reviews AI-generated code and returns ranked issues with hints.",
    status: "Parked",
    currentMilestone: "Specced, not started.",
  },
];

async function main() {
  for (const project of projects) {
    await prisma.project.create({ data: project });
  }
  console.log(`Seeded ${projects.length} projects.`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
