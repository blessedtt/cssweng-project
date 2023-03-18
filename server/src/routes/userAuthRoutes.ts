/**
 * @file userAuthRoutes.ts
 * @description This file contains all routes for user authentication-related services
 */

import express from 'express';
import passport from 'passport';

import userCheckAuth from '../services/user/auth/userCheckAuth';
import userNoAuth from '../services/user/auth/userNoAuth';


const UserAuthRouter = express.Router();

UserAuthRouter.get('/', userCheckAuth, async (req, res, next) => {
	const user = await req.user;
	console.log("Home: ");
	console.log(user)
	//@ts-ignore
	res.render('index', {name: user.name});
});

UserAuthRouter.get('/test', userCheckAuth, async(req, res) => {
	res.send("Test Successful, user is authenticated.");
});

UserAuthRouter.get('/login', userNoAuth, (req, res, next) => {
	res.render('login');
});

// Login Handle
UserAuthRouter.post('/login', userNoAuth, passport.authenticate('login'), (req, res, next) => {
	//@ts-ignore
	res.status(200).json({message: "Successfully Logged in.", userdata: {name: req.user.name, email: req.user.email, type: req.user.type}});
});


// Logout Handle
UserAuthRouter.delete('/logout', userCheckAuth, (req, res, next) => {
	req.logOut((err) => {
		if (err) return next(err);
		res.redirect('/');
	});
	req.flash('success_msg', 'You are logged out');
});


export default UserAuthRouter;