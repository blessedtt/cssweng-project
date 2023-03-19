/**
 * Checks if the user is authenticated
 * if authenticated, continues on with the request
 * otherwise, send forbidden message to client
 */

import { Request, Response, NextFunction } from 'express';

export default function userCheckAuth(req: Request, res: Response, next: NextFunction){
	if (req.isAuthenticated()) {
		return next();
	}

	res.status(401).json({message: 'You are not logged in'});
}