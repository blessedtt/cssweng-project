/**
 * @fileoverview Error response handler
 * @description This file contains the error response handler for all routes
 */
import { Request, Response, NextFunction } from 'express';

export default function ErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
	//log the error
	console.log(err);
	//send the error response
	res.status(400).json(err.message);
}