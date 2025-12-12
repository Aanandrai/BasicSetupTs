"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controlelr_1 = require("../controllers/user.controlelr");
const asyncHandler_1 = require("../utills/asyncHandler");
const router = express_1.default.Router();
router.get("/", (0, asyncHandler_1.asyncHandler)(user_controlelr_1.getUsers));
router.post("/", (0, asyncHandler_1.asyncHandler)(user_controlelr_1.createUser));
exports.default = router;
//# sourceMappingURL=user.route.js.map