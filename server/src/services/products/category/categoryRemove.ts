/**
 * @file categoryRemove.ts
 * @description This file contains the route for removing a category from the database
 */

//explicit Prisma dependency
import prisma from "../../../repositories/prismaClient";

import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const category = await prisma.product_category.delete({
			where: {
				category_ID: Number(id),
			},
		});
		res.json(category);
	} catch (error) {
		next(error);
	}
}