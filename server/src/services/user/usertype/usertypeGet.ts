/**
 * @file usertypeGet.ts
 * @description This file contains the route for getting all user types from the database
 */

import { Request, Response, NextFunction } from "express";

import DatabaseError from "../../error/databaseError";

import prisma from "../../../repositories/prismaClient";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const userTypes = await prisma.user_category.findMany({});
		console.log(userTypes);
		res.json(userTypes);
	} catch (error : any) {
		console.log(error)
		next(DatabaseError.DBError(error.code));
	}
}