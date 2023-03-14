/**
 * @file settings.ts
 * @description contains all user routes involving logging in, logging out, and registering new users
 */

import express, { Express } from 'express';

import userAddEmployee from '../services/user/userAddEmployee';
import userGet from '../services/user/userGetEmployees';
import userRemove from '../services/user/userRemove';

import validateEmailMiddle from '../services/middleware validation/validateEmailMiddle';
import validatePasswordMiddle from '../services/middleware validation/validatePasswordMiddle';

import UserTypeRouter from './usertypeRoutes';

const UserRouter = express.Router();

UserRouter.use('/type', UserTypeRouter);

UserRouter.get('/', (req, res) => {
	res.render('addUser');
});

UserRouter.get('/get', userGet);
UserRouter.post('/add', validateEmailMiddle, validatePasswordMiddle, userAddEmployee);
UserRouter.delete('/:email', userRemove);

export default UserRouter;