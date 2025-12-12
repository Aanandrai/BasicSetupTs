"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = void 0;
const ApiError_1 = require("./ApiError");
const asyncHandler = (fn) => async (req, res, next) => {
    try {
        await fn(req, res, next);
    }
    catch (error) {
        console.error(`Error in route ${req.method} ${req.originalUrl}:`, error);
        // If it's an ApiError, use its statusCode and message
        if (error instanceof ApiError_1.ApiError) {
            res.status(error.statusCode).json({
                statusCode: error.statusCode,
                success: false,
                message: error.message,
                errors: error.errors || []
            });
        }
        else {
            // For generic errors
            res.status(500).json({
                statusCode: 500,
                success: false,
                message: "Internal Server Error"
            });
        }
    }
};
exports.asyncHandler = asyncHandler;
//# sourceMappingURL=asyncHandler.js.map