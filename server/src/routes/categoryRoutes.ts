/**
 * @file categoryRoutes.ts
 * @description This file contains all the routes for product category operations
 */
import express, { Router } from 'express';

//services - function request handlers for each route
import categoryAdd from '../services/products/category/categoryAdd';
import categoryGet from '../services/products/category/categoryGet';
import categoryEdit from '../services/products/category/categoryEdit';
import categoryDelete from '../services/products/category/categoryRemove';

const CategoryRouter: Router = express.Router();

CategoryRouter.get('/', (req, res) => {
	res.render('addCategory');
});

CategoryRouter.post('/add', categoryAdd);
CategoryRouter.get('/get', categoryGet);
CategoryRouter.put('/:id', categoryEdit);
CategoryRouter.delete('/:id', categoryDelete);

export default CategoryRouter;