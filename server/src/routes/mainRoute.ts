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

export const LoadRoutes = (app: Router) => {
	app.use('/product', ProductRouter);
	app.use('/category', CategoryRouter);
	app.use('/user', UserRouter);
	app.use('/', UserAuthRouter);

	app.use(ErrorHandler);
};