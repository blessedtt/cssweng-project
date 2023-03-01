"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file productRoutes.ts
 * @description This file contains all the routes for product operations
 */
const express_1 = __importDefault(require("express"));
//services - function request handlers for each route
const productAdd_1 = __importDefault(require("../services/products/productAdd"));
const productGet_1 = __importDefault(require("../services/products/productGet"));
const productEdit_1 = __importDefault(require("../services/products/productEdit"));
const productRemove_1 = __importDefault(require("../services/products/productRemove"));
const ProductRouter = express_1.default.Router();
ProductRouter.post('/add', productAdd_1.default);
ProductRouter.get('/get', productGet_1.default);
ProductRouter.put('/:id', productEdit_1.default);
ProductRouter.delete('/remove', productRemove_1.default);
exports.default = ProductRouter;
