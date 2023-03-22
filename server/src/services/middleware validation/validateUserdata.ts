//checks if new user data is valid
//passes to next if valid, throws an error if invalid

import { Request, Response, NextFunction } from 'express';

import validatePassword from '../validation/validatePassword';
import validateEmail from '../validation/validateEmail';
import validateName from '../validation/validateName';

export default async (req: Request, res: Response, next: NextFunction) => {
	try{
		let { name, password, email } = req.body;
		email = email.toLowerCase();

		const isNameValid = validateName(name);
		const isEmailValid = await validateEmail(email);
		const isPasswordValid = validatePassword(password);

		//edge case
		if (email === password.toLowerCase()) throw new Error('Email cannot be your password!!');

		if (isNameValid && isPasswordValid && isEmailValid) 
			next();
	} catch(err){
		console.log(err);
		next(err)
	}
}