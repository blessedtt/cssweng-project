/**
 * @file productEdit.ts
 * @description This file contains the route for editing an existing product in the database
 */

import { Request, Response, NextFunction } from "express";

import DatabaseError from "../error/databaseError";

import prisma from "../../repositories/prismaClient";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		//get the product id from the request parameters
		const { name, sell_price, stock, sales, type, brand, order_amt } = req.body;
		const { id } = req.params;

		console.log(req.body);
		console.log(req.params);

		//update the product
		const product = await prisma.product.update({
			where: {
				product_ID: Number(id),
			},
			data: {
				name: name || undefined,
				brand: brand || undefined,
				sell_price: Number(sell_price),
				stock: Number(stock),
				sales: Number(sales),
				order_amt: Number(order_amt),
				type: type || undefined,
				avg_value: Number(sell_price) * Number(stock),
				revenue: Number(sell_price) * Number(sales),
				last_updated: new Date(),
			},
		});
		res.json(product);

	//catch any errors and send to next middleware error handler
	} catch (error: any) {
		next(DatabaseError.DBError(error.code));
	}
}
