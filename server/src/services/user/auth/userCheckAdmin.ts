/** checks if user is an admin
 *  prevents access to pages that require admin privileges
 */

import { Request, Response, NextFunction } from 'express';
import usertypeGetUnique from '../api/usertypeGetUnique';

export default async function userCheckAdmin(req: Request, res: Response, next: NextFunction){

	try{
		const user = await req.user;
		//@ts-ignore
		const usertype = await usertypeGetUnique({utype_ID: user.type});
		console.log(usertype);
		//@ts-ignore
		if (usertype.utype_title == "Admin"){
			return next();
		}
		
		res.send("You do not have access to this page. Please contact your administrator.");
	}
	catch(err){
		console.log(err);
		throw err;
	}
}