//send a message to user if a session exists for them in the server

import { Request, Response } from "express";

export const verifyAuth = async (req: Request, res: Response) => {
	if(req.isAuthenticated()){
		const user = await req.user;
		//@ts-ignore
		res.status(200).json({message: "User is already logged in", userdata: {name: user.name, email: user.email, type: user.type, expiry: req.session.cookie.expires}})
	}
	else{
		res.status(401).send({message: 'You are not logged in'});
	}
}