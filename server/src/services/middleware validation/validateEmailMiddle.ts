//express middleware callback that calls validateEmail
//sends an error back to client if email is invalid

import { Request, Response, NextFunction } from "express";
import validateEmail from "../validation/validateEmail";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email } = req.body;
		const isValid = await validateEmail(email);
		if (!isValid) {
			throw new Error("Invalid email. Make sure that you have entered a valid email address.");
		}
		next();
	} catch (error: any) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
}