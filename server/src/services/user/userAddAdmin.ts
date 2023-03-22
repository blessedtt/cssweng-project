/**
 * @file userAdd.ts
 * @description This file contains the route for adding a user to the database
 */

import { Request, Response, NextFunction } from "express";

import DatabaseError from "../error/databaseError";

import  userAdd  from "./api/userAdd";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		//combine req.body with usertype string into one object
		const data = { ...req.body, utype_title: "Admin"}
		data.email = data.email.toLowerCase();

		const user = await userAdd(data);
		res.status(200).json(user);

		
	} catch (error : any) {
		console.log(error)
		next(DatabaseError.DBError(error.code));
	}
}