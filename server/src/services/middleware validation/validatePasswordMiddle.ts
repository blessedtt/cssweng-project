//express middleware callback that calls validatePassword
//sends an error back to client if password is invalid

import { Request, Response, NextFunction } from "express";

import validatePassword from "../validation/validatePassword";

export default async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { password } = req.body;
		const isValid = validatePassword(password);
		if (isValid)
			next();
	} catch (error: any) {
		console.log(error);
		res.status(400).json({ message: error.message });
	}
};