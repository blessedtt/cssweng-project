/**
 * @file productEdit.ts
 * @description This file contains the route for editing an existing product in the database
 */

import { Request, Response, NextFunction } from "express";

import prisma from "../../repositories/prismaClient";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { name, price, stock, sales, category, brand } = req.body;
		const { id } = req.params;
		//update the product
		const product = await prisma.product.update({
			where: {
				product_ID: Number(id),
			},
			data: {
				name,
				brand,
				sell_price: Number(price),
				stock: Number(stock),
				sales: Number(sales),
				product_category: {
					connect: {
						category_ID: category,
					}
				},
				last_updated: new Date(),
			},
		});
		res.json(product);

	//catch any errors and send to next middleware error handler
	} catch (error) {
		next(error);
	}
}
