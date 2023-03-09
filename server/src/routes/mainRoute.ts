/**
 * @file mainRoute.ts
 * @description This file contains the main routes for the application
 */
import { Router } from 'express';

import ProductRouter from './productRoutes';
import CategoryRouter from './categoryRoutes';
import UserRouter from './userRoutes';
import UserAuthRouter from './userAuthRoutes';

import ErrorHandler from '../services/error/errorResponse';
import userCheckAuth from '../services/user/auth/userCheckAuth';

export const LoadRoutes = (app: Router) => {
	app.use('/product', userCheckAuth, ProductRouter);
	app.use('/category', userCheckAuth, CategoryRouter);
	app.use('/user', userCheckAuth, UserRouter);
	app.use('/', UserAuthRouter);

	app.use(ErrorHandler);
};