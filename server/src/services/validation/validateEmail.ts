// checks if an email being used to register is valid
// validates using deep-email-validator
// returns true if valid, false if invalid

import { validate } from 'deep-email-validator';

export default async function validateEmail(email: string){
	try{
		const { valid, reason, validators } = await validate({
			email,
			validateSMTP: false,
		});



		console.log(valid);
		return valid;
	}
	catch(err){
		console.log(err);
		throw err;
	}

}