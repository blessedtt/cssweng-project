/**
 * @file productGet.ts
 * @description This file contains the route for getting all products in the database
 */

//explicit Prisma dependency
import prisma from "../../repositories/prismaClient";

import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const products = await prisma.product.findMany();
		res.json(products);
	} catch (error) {
		next(error);
	}
}