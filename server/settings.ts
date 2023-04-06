/**
 * @file settings.ts
 * @description This file contains all the settings and dependencies for the application
 */
import express, { Express } from 'express';
import cors from 'cors';
import methodOverride from 'method-override';

import flash from 'express-flash';
import session from 'express-session';
import passport from 'passport';

import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

const corsOptions = {
	origin: process.env.CORS_ORIGIN ?? 'http://localhost:3000',
	credentials: true,
	optionsSuccessStatus: 200,
}

export const loadMiddlewares = (app: Express) => {
	app.use(cors(corsOptions));
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));
	app.use(methodOverride('_method'));

	//user authentication
	app.use(flash());
	app.use(
		session({
			secret: process.env.SESSION_SECRET ?? 'secret',
			resave: false,
			saveUninitialized: false,
			cookie: {
				secure: process.env.NODE_ENV === 'production' ? true : false,
				maxAge: 1000 * 60 * 60 * 24, // 1 day
			}
	}));
	app.use(passport.session());
	app.use(passport.initialize());

	//set path to build folder
	app.set('view engine', 'html');
	app.use(express.static('build'));
}