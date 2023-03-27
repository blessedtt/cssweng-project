//send a message to admin based on their input password
//used to verify user actions

//returns 200 if success
//returns 401 if incorrect password

import { Request, Response } from "express";

import userGetUnique from "../api/userGetUnique";
import bcryptjs from "bcryptjs";

export default async function verifyAdmin(req: Request, res: Response){

	try{
		const sessionUser = await req.user;
		const { password } = req.body;

		//@ts-ignore
		const userData = await userGetUnique(sessionUser.email.toLowerCase());

		if (userData !== null && await bcryptjs.compare(password, userData.pass)) {
			res.status(200).json({ message: "Success" });
		} else {
			res.status(401).json({ message: "Failure: Incorrect Password" });
		}

		
	} catch (error) {
		console.log("Error in verifyAdmin: ", error);
		res.status(500).json({ message: "Internal server error" });
	}
}