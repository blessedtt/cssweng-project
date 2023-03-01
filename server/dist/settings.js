"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadMiddlewares = void 0;
/**
 * @file settings.ts
 * @description This file contains all the settings for the application
 */
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const loadMiddlewares = (app) => {
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
};
exports.loadMiddlewares = loadMiddlewares;
