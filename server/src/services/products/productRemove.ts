/**
 * @file productRemove.ts
 * @description This file contains the route for removing a product from the database
 */

import { Request, Response, NextFunction } from "express";

import prisma from "../../repositories/prismaClient";
import DatabaseError from "../error/databaseError";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { idList } = req.body;
		console.log(req.body);
		const product = await prisma.product.deleteMany({
			where: {
				product_ID: {
					in: idList,
				}
			},
		});
		res.json(product);
	} catch (error: any) {
		next(DatabaseError.DBError(error.code));
	}
};