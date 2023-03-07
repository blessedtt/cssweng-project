/**
 * @file userGet.ts
 * @description This file contains the route for getting a user from the database
 */

import { Request, Response, NextFunction } from "express";

import DatabaseError from "../error/databaseError";

import prisma from "../../repositories/prismaClient";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const users = await prisma.user.findMany({
			where: {
				NOT: {
					user_category: {
						utype_title:{
							equals: "Admin"
						}
					}
				}
			}
		});

		console.log(users);
		res.json(users);
	} catch (error : any) {
		console.log(error)
		next(DatabaseError.DBError(error.code));
	}
}