"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(statusCode, message = "something went wrong", errors = [], stack) {
        super(message);
        this.statusCode = statusCode;
        this.errors = errors;
        this.success = false; // usually false for errors
        this.data = null;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=ApiError.js.map