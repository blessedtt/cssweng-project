// checks if an email being used to register is valid
// validates using deep-email-validator
// returns true if valid, false if invalid

import { validate } from 'deep-email-validator';

export default async function validateEmail(email: string){
	try{
		const { valid, reason, validators } = await validate({
			email,
			validateMx: false,
			validateDisposable: true,
			validateSMTP: false,
		});

		if (!valid) throw new Error("Invalid email. Please enter a valid email address.");
		return true;
	}
	catch(err){
		throw err;
	}

}