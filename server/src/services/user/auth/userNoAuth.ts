/**
 * Checks if the user is not authenticated
 * Used for login route
 * if not authenticated, continues on with the request
 * otherwise, redirects to home page
 */

import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
	if (req.isUnauthenticated()) {
		return next();
	}

	next(new Error('User is already authenticated'));
}