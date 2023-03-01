"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file prismaClient.ts
 * @description This file is used to create a singleton instance of the prisma client
 */
const client_1 = require("@prisma/client");
let prisma;
let globalWithPrisma = global;
if (!globalWithPrisma.prisma) {
    prisma = new client_1.PrismaClient({ errorFormat: 'minimal' });
    globalWithPrisma.prisma = prisma;
}
prisma = globalWithPrisma.prisma;
exports.default = prisma;
