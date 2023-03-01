"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file categoryRoutes.ts
 * @description This file contains all the routes for product category operations
 */
const express_1 = __importDefault(require("express"));
//services - function request handlers for each route
const categoryAdd_1 = __importDefault(require("../services/category/categoryAdd"));
const categoryGet_1 = __importDefault(require("../services/category/categoryGet"));
const categoryEdit_1 = __importDefault(require("../services/category/categoryEdit"));
const categoryRemove_1 = __importDefault(require("../services/category/categoryRemove"));
const CategoryRouter = express_1.default.Router();
CategoryRouter.post('/add', categoryAdd_1.default);
CategoryRouter.get('/get', categoryGet_1.default);
CategoryRouter.put('/:id', categoryEdit_1.default);
CategoryRouter.delete('/id', categoryRemove_1.default);
exports.default = CategoryRouter;
