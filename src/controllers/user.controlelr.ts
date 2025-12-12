import { Request, Response } from "express";
import User from "../models/user.model";
import { asyncHandler } from "../utills/asyncHandler";
import { ApiResponse } from "../utills/ApiResponse";
import { ApiError } from "../utills/ApiError";

// GET /users
export const getUsers = asyncHandler(async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.json(new ApiResponse(200, users, "Users fetched successfully"));
});

// POST /users
export const createUser = asyncHandler(async (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    throw new ApiError(400, "Name and email are required");
  }

  const newUser = await User.create({ name, email });
  res.json(new ApiResponse(201, newUser, "User created successfully"));
});
