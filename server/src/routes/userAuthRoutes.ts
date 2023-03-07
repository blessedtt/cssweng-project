/**
 * @file userAuthRoutes.ts
 * @description This file contains all routes for user authentication-related services
 */

import express from 'express';
import passport from 'passport';
import userCheckAuth from '../services/user/auth/userCheckAuth';
import userNoAuth from '../services/user/auth/userNoAuth';

const UserAuthRouter = express.Router();

UserAuthRouter.get('/login', userNoAuth, (req, res, next) => {
	res.render('login');
});

// Login Handle
UserAuthRouter.post('/login', userNoAuth, passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: true
}));


// Logout Handle
UserAuthRouter.delete('/logout', userCheckAuth, (req, res, next) => {
	req.logOut((err) => {
		if (err) return next(err);
		res.redirect('/login');
	});
	req.flash('success_msg', 'You are logged out');
});


export default UserAuthRouter;