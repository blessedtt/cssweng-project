/**
 * @file prismaClient.ts
 * @description This file is used to create a singleton instance of the prisma client
 */
import {PrismaClient} from '@prisma/client';

let prisma : PrismaClient;

let globalWithPrisma = global as typeof globalThis & {
	prisma: PrismaClient;
}

if (!globalWithPrisma.prisma) {
	prisma = new PrismaClient({errorFormat: 'minimal'});
	globalWithPrisma.prisma = prisma;
}

prisma = globalWithPrisma.prisma;

export default prisma;