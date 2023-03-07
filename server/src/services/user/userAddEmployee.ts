/**
 * @file userAdd.ts
 * @description This file contains the route for adding a user to the database
 */

import { Request, Response, NextFunction } from "express";
import bcryptjs from "bcryptjs";

import DatabaseError from "../error/databaseError";

import prisma from "../../repositories/prismaClient";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, password, email } = req.body;
		
		const hashedPassword = await bcryptjs.hash(password, 10);

		const user = await prisma.user.create({
			data: {
				username,
				pass: hashedPassword,
				email,
				user_category: {
					connect: {
						utype_title: "Employee",
					},
				},
			},
		});
		console.log(user);
		//res.json(user);
	} catch (error : any) {
		console.log(error)
		next(DatabaseError.DBError(error.code));
	}
}