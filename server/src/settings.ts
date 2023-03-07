/**
 * @file settings.ts
 * @description This file contains all the settings and dependencies for the application
 */
import express, { Express } from 'express';
import cors from 'cors';

import flash from 'express-flash';
import session from 'express-session';
import passport from 'passport';

import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
}

export const loadMiddlewares = (app: Express) => {
	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	//user authentication
	app.use(flash());
	app.use(
		session({
			secret: process.env.SESSION_SECRET ?? 'secret',
			resave: false,
			saveUninitialized: false,
	}));
	app.use(passport.session());
	app.use(passport.initialize());

	app.set('view engine', 'ejs');
	app.use(express.static('views'));
}