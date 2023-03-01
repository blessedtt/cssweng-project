"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ErrorHandler(err, req, res, next) {
    //log the error
    console.log(err);
    //send the error response
    res.status(500).json({
        status: 'error',
        message: err.message,
    });
}
exports.default = ErrorHandler;
