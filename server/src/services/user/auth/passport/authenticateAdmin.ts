import bcryptjs from "bcryptjs";

import userGetUnique from "../../api/userGetUnique";
import userGetQuestion from "../../api/question/userGetQuestion";

export const authenticateAdmin = async (email: string, password: string, answer: string, done: any) => {
	try{
		const user = await userGetUnique({email});
		if(user == null){
			return done(null, false, {message: 'No user with that email'});
		}
		if (await bcryptjs.compare(password, user.pass)){
			const adminAnswer = await userGetQuestion(user.user_ID);

			if (adminAnswer == null){
				return done(null, false, {message: 'No security question found'});
			}

			if(adminAnswer.answer == answer){
				return done(null, user);
			}

		}
		else{
			return done(null, false, {message: 'Incorrect Password'});
		}

	}
	catch(error){
		console.log(error);
		return done(error, false, {message: 'An error occurred while logging in'});
	}
}