import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Import routes (no .js extension needed for CommonJS TypeScript)
// import UserRoute from "./routes/user.route";

const app: Application = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
// app.use("/api/v1/user", UserRoute);

export default app;
