/**
 * @file categoryAdd.ts
 * @description This file contains the route for adding a category to the database
 */

//explicit Prisma dependency
import prisma from "../../repositories/prismaClient";

import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const category = await prisma.product_category.create({
			data: {
				name: req.body.name,
			},
		});
		res.json(category);
	} catch (error) {
		next(error);
	}
}