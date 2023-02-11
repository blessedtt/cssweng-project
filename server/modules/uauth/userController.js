const {PrismaClient} = require("@prisma/client");
const prisma = global.prisma

const { validationResult } = require('express-validator');

exports.loginUser = async (req, res) => {
	const errors = validationResult(req);

	//get inputs if there are no input errors (validators don't throw anything in errors)
	if (errors.isEmpty()){
		const { email, password } = req.body;
	

		console.log("searching user...")
		//find if user exists in database
		await prisma.user.findUniqueOrThrow({
			where: { user_email: email }
		})
		.then((result) => {
			//TODO: encrypt password for register and login check
			if (result.user_pass === password){
				//store user email and fullname to session cookie
				req.session.user = {
					email: result.user_email, 
					username: result.user_fullname
				};

				//store a new session in database


				//redirect to another page (can be modified depending on frontend implementation)
				console.log(req.session);
				res.redirect("/login-success");
			} else {
				//TODO: login error redirect/recheck on frontend
				res.redirect("/login-error");
			}

		})
		.catch((err) => {
			//TODO: Show user not found and redirect to registration menu(?)
		});

	}
}