/**
 * @file userEdit.ts
 * @description This file contains the route for editing a user from the database
 */

import { Request, Response, NextFunction } from "express";
import bcryptjs from "bcryptjs";

import DatabaseError from "../error/databaseError";

import validatePassword from "../validation/validatePassword";

import prisma from "../../repositories/prismaClient";


export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { username, newPassword, email, newType } = req.body;
		//check if password is valid
			const hashedPassword = await bcryptjs.hash(newPassword, 10);
			const user = await prisma.user.update({
				where: {
					email,
				},
				data: {
					//undefined means retain old value if not changed
					name: username || undefined,
					pass: hashedPassword,
					email: email || undefined,
					type: newType || undefined,
					date_created: undefined,
				},
			});
			console.log(user);
			res.json(user);
	} catch (error : any) {
		console.log(error)
		next(DatabaseError.DBError(error.code));
	}
}