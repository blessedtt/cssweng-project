/**
 * @file usertypeAdd.ts
 * @description This file contains the route for adding a user type to the database
 */

import { Request, Response, NextFunction } from "express";

import DatabaseError from "../../error/databaseError";

import prisma from "../../../repositories/prismaClient";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { utype_title } = req.body;
		const userType = await prisma.user_category.create({
			data: {
				utype_title,
			},
		});
		console.log(userType);
		res.json(userType);
	} catch (error : any) {
		console.log(error)
		next(DatabaseError.DBError(error.code));
	}
}
