const {body} = require("express-validator");

function isValidPassword(){

}

exports.loginValidation = [
	//email validation
	body("email").not().isEmpty().withMessage("Email is Required."),
	body("email").isEmail().not().withMessage("Input Must be an Email."),

	//password validation
	body("password").not().isEmpty().withMessage("Password is Required.")
]

exports.registerValidation = [
	//email validation
	body("email").not().isEmpty().withMessage("Email is Required."),
	body("email").not().isEmail().withMessage("Input Must be an Email.").trim().es,

	//name validation
	body("firstname").trim().not().isEmpty().withMessage("This field is required."),
	body("lastname").trim().not().isEmpty().withMessage("This field is required"),

	// Password needs to be min 6 chars
	body('password').trim().isLength({ min: 6 }).withMessage("Password must be at least 6 characters long."),
	// Confirm Password needs to be min 6 chars AND must match the req.body.password field
	body('confirmPassword').trim().isLength({ min: 6 }).withMessage("Password must be at least 6 characters long.")
		.custom((value, { req }) => {
		if (value !== body("password")) {
			throw new Error("Passwords must match.");
		}
		return true;
	})
]