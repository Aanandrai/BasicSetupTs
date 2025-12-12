import { Request, Response, NextFunction } from "express";
import { ApiError } from "./ApiError";

const asyncHandler =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error: unknown) {
      console.error(`Error in route ${req.method} ${req.originalUrl}:`, error);

      // If it's an ApiError, use its statusCode and message
      if (error instanceof ApiError) {
        res.status(error.statusCode).json({
          statusCode: error.statusCode,
          success: false,
          message: error.message,
          errors: error.errors || []
        });
      } else {
        // For generic errors
        res.status(500).json({
          statusCode: 500,
          success: false,
          message: "Internal Server Error"
        });
      }
    }
  };

export { asyncHandler };
