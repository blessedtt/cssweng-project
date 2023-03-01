"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @file index.ts
 * @description This file is the entry point of the application
 */
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//custom imports
const settings_1 = require("./settings");
const mainRoute_1 = require("./routes/mainRoute");
dotenv_1.default.config();
const PORT = process.env.PORT || 3001;
const app = (0, express_1.default)();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
(0, settings_1.loadMiddlewares)(app);
(0, mainRoute_1.LoadRoutes)(app);
