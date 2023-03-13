//import passport-local
import { Strategy as LocalStrategy } from 'passport-local';

import userGetUnique from '../../api/userGetUnique';
import { authenticateUser } from './authenticateUser';
import { user } from '@prisma/client';

export default function initializeUser(passport: any): void {

	passport.use('login', new LocalStrategy({
		usernameField: 'email',
		passwordField: 'password',
	}, authenticateUser));

	passport.serializeUser((user: user, done: any) => {done(null, user.email) });
	passport.deserializeUser((email: string, done: any) => {
		done(null, userGetUnique({email}));
	});
}