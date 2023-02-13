//authentication controller between route and handler

const authHandler = require('./authService');
const createError = require('http-errors');

class AuthController{
	static async register(req, res, next) {
		try{
			const user = await authHandler.register(req.body);
			res.status(200).json({
				status: true,
				message: 'User successfully created.',
				data: user,
			})   
		} catch (err) {
			next(createError(err.statusCode, err.message));
		}

	}

	static async login(req, res, next) {
		try {
			const data = await authHandler.login(req.body)
			res.status(200).json({
				status: true,
				message: "User Successfully logged in.",
				data: user,
			});
		} catch(err) {
			next(createError(err.statusCode, err.message));
		}
	}
}

module.exports = AuthController;