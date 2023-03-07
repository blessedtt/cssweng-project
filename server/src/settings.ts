/**
 * @file settings.ts
 * @description This file contains all the settings for the application
 */
import express, { Express } from 'express';
import cors from 'cors';

export const loadMiddlewares = (app: Express) => {
	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	app.set('view engine', 'ejs');
	app.use(express.static('views'));
}