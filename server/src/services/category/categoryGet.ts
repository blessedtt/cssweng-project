/**
 * @file categoryGet.ts
 * @description This file contains the route for getting a category from the database
 */

//explicit Prisma dependency
import prisma from "../../repositories/prismaClient";

import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const category = await prisma.product_category.findMany();
		res.json(category);
	} catch (error) {
		next(error);
	}
}