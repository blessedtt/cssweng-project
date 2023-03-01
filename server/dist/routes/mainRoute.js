"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadRoutes = void 0;
const productRoutes_1 = __importDefault(require("./productRoutes"));
const categoryRoutes_1 = __importDefault(require("./categoryRoutes"));
const errorResponse_1 = __importDefault(require("../services/error/errorResponse"));
const LoadRoutes = (app) => {
    app.use('/product', productRoutes_1.default);
    app.use('/category', categoryRoutes_1.default);
    app.use(errorResponse_1.default);
};
exports.LoadRoutes = LoadRoutes;
