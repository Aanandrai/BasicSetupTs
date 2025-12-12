"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const user_model_1 = __importDefault(require("../models/user.model"));
const asyncHandler_1 = require("../utills/asyncHandler");
const ApiResponse_1 = require("../utills/ApiResponse");
const ApiError_1 = require("../utills/ApiError");
// GET /users
exports.getUsers = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const users = await user_model_1.default.findAll();
    res.json(new ApiResponse_1.ApiResponse(200, users, "Users fetched successfully"));
});
// POST /users
exports.createUser = (0, asyncHandler_1.asyncHandler)(async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        throw new ApiError_1.ApiError(400, "Name and email are required");
    }
    const newUser = await user_model_1.default.create({ name, email });
    res.json(new ApiResponse_1.ApiResponse(201, newUser, "User created successfully"));
});
//# sourceMappingURL=user.controlelr.js.map