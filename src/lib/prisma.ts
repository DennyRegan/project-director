// Shared Prisma Client instance.
//
// Next.js hot-reloads modules in dev, which would otherwise create a fresh
// PrismaClient (and a fresh Postgres connection pool) on every code change.
// We stash the client on `globalThis` so dev reloads reuse the same instance.

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

function createPrismaClient() {
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
  return new PrismaClient({ adapter });
}

export const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
