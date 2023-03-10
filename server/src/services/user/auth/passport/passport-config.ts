//import passport-local
import { Strategy as LocalStrategy } from 'passport-local';

import userGetUnique from '../../api/userGetUnique';
import { authenticateUser } from './authenticateUser';
import { authenticateAdmin } from './authenticateAdmin';

export default function initializeUser(passport: any): void {

	passport.use('employee', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
	}, authenticateUser));

	passport.use('admin', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
		passReqToCallback: true,
		}, (req, email, password, done) => {
			const answer = req.body.answer;
			authenticateAdmin(email, password, answer, done);
		}
		));

	passport.serializeUser((user: any, done: any) => {done(null, user.email) });
	passport.deserializeUser((email: string, done: any) => {
		done(null, userGetUnique({email}));
	});
}