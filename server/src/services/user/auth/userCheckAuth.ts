/**
 * Checks if the user is authenticated
 * if authenticated, continues on with the request
 * otherwise, redirects to login page
 */

import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/login');
}