/**
 * @file productRemove.ts
 * @description This file contains the route for removing a product from the database
 */

import { Request, Response, NextFunction } from "express";

import prisma from "../../repositories/prismaClient";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const product = await prisma.product.delete({
			where: {
				product_ID: Number(id),
			},
		});
		res.json(product);
	} catch (error) {
		next(error);
	}
};