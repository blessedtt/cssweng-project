//send a message to admin based on their input password
//used to verify user actions

import { Request, Response } from "express";

import userGetUnique from "../api/userGetUnique";
import bcryptjs from "bcryptjs";

export default async function verifyAdmin(req: Request, res: Response){

	try{
		const sessionUser = await req.user;
		const { password } = req.body;

		//@ts-ignore
		const userData = await userGetUnique({email: sessionUser.email});

		if (userData !== null && await bcryptjs.compare(password, userData.pass)) {
			console.log("Verify Success");
			res.status(200).json({ message: "Success" });
		} else {
			console.log("Verify Failure: Incorrect Password");
			res.status(401).json({ message: "Failure: Incorrect Password" });
		}

		
	} catch (error) {
		console.log("Error in verifyAdmin: ", error);
		res.status(500).json({ message: "Internal server error" });
	}
}