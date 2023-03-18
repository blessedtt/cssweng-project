import bcryptjs from "bcryptjs";

import userGetUnique from "../../api/userGetUnique";
import DatabaseError from "../../../error/databaseError";

export const authenticateUser = async (email: string, password: string, done: any) => {
	try{
		const user = await userGetUnique({email});
		if(user == null){
			return done(null, false, {message: 'No user with that email'});
		}
		if (await bcryptjs.compare(password, user.pass)){
			return done(null, user);
		}
		else{
			return done(null, false, {message: 'Incorrect Password'});
		}

	}
	catch(error: any){
		console.log('User authentication error: ');

		const dbErr = error.code ? new DatabaseError(error.code, "User not found") : error as Error;
		return done(dbErr, false, {message: 'An error occurred while logging in'});
	}
}