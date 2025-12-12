import express, { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controlelr";
import { asyncHandler } from "../utills/asyncHandler";

const router: Router = express.Router();

router.get("/", asyncHandler(getUsers));
router.post("/", asyncHandler(createUser));

export default router;
