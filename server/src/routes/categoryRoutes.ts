/**
 * @file categoryRoutes.ts
 * @description This file contains all the routes for product category operations
 */
import express, { Router } from 'express';

//services - function request handlers for each route
import categoryAdd from '../services/category/categoryAdd';
import categoryGet from '../services/category/categoryGet';
import categoryEdit from '../services/category/categoryEdit';
import categoryDelete from '../services/category/categoryRemove';

const CategoryRouter: Router = express.Router();

CategoryRouter.post('/add', categoryAdd);
CategoryRouter.get('/get', categoryGet);
CategoryRouter.put('/:id', categoryEdit);
CategoryRouter.delete('/id', categoryDelete);

export default CategoryRouter;