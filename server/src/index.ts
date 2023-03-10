/**
 * @file index.ts
 * @description This file is the entry point of the application
 */
import express, {Express, Request, Response} from 'express';
import dotenv from 'dotenv';

//custom imports
import { loadMiddlewares } from './settings';
import { LoadRoutes } from './routes/mainRoute';

dotenv.config();

const PORT = process.env.PORT || 3001;

const app: Express = express();

app.listen(PORT, () => {
	  console.log(`Server is running on port ${PORT}`);
});

loadMiddlewares(app);
LoadRoutes(app);