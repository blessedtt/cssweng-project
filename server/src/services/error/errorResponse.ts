/**
 * @fileoverview Error response handler
 * @description This file contains the error response handler for all routes
 */
import { Request, Response, NextFunction } from 'express';

export default function ErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
	//log the error
	console.log(err);
	//send the error response
	res.status(500).json({
		status: 'error',
		message: err.message,
	});
}