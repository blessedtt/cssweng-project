"use strict";
/**
 * @file productEdit.ts
 * @description This file contains the route for editing an existing product in the database
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = __importDefault(require("../../repositories/prismaClient"));
exports.default = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //get the product id from the request parameters
        const { name, sell_price, stock, sales, type, brand, order_amt } = req.body;
        const { id } = req.params;
        console.log(req.body);
        console.log(req.params);
        //update the product
        const product = yield prismaClient_1.default.product.update({
            where: {
                product_ID: Number(id),
            },
            data: {
                name,
                brand,
                sell_price: Number(sell_price),
                stock: Number(stock),
                sales: Number(sales),
                order_amt: Number(order_amt),
                type: type,
                last_updated: new Date(),
            },
        });
        res.json(product);
        //catch any errors and send to next middleware error handler
    }
    catch (error) {
        next(error);
    }
});
