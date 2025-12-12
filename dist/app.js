"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
// Import routes (no .js extension needed for CommonJS TypeScript)
// import UserRoute from "./routes/user.route";
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Routes
// app.use("/api/v1/user", UserRoute);
exports.default = app;
//# sourceMappingURL=app.js.map