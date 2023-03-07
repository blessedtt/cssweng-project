/**
 * @file userDelete.ts
 * @description This file contains the route for deleting a user from the database
 */

import { Request, Response, NextFunction } from "express";

import DatabaseError from "../error/databaseError";

import prisma from "../../repositories/prismaClient";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email } = req.params;
		const user = await prisma.user.delete({
			where: {
				email,
			},
		}); 
		console.log(user);
		res.json(user);
	} catch (error : any) {
		console.log(error)
		next(DatabaseError.DBError(error.code));
	}
}
