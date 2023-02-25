/**
 * @file mainRoute.ts
 * @description This file contains the main routes for the application
 */
import { Router } from 'express';

import ProductRouter from './productRoutes';
import CategoryRouter from './categoryRoutes';
import ErrorHandler from '../services/error/errorResponse';

export const LoadRoutes = (app: Router) => {
	app.use('/product', ProductRouter);
	app.use('/category', CategoryRouter);

	app.use(ErrorHandler);
};