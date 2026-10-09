import {prismaClient} from "../app/generated/prisma";
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma ||
new prismaClient();

if (Process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma = prisma;
}