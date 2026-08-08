-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "purpose" TEXT,
    "status" TEXT NOT NULL,
    "currentObjective" TEXT,
    "currentMilestone" TEXT,
    "evidenceSoFar" TEXT,
    "biggestProblem" TEXT,
    "nextMilestone" TEXT,
    "startDate" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
