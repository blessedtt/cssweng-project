/**
 * @file productGet.ts
 * @description This file contains the route for getting all products in the database
 */

//explicit Prisma dependency
import { Request, Response, NextFunction } from "express";

import prisma from "../../repositories/prismaClient";
import DatabaseError from "../error/databaseError";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const products = await prisma.product.findMany(
			{
				include: {
					product_category: true,
			}
		});
		res.json(products);
	} catch (error: any) {
		next(DatabaseError.DBError(error.code));
	}
}