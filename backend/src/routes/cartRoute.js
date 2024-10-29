import { addToCart, updateCart, getUserCart } from "../controllers/cartController.js";
import express from "express";
import upload from "../middleware/multer.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authUser, upload.none(), addToCart);
cartRouter.post("/update", authUser, updateCart);
cartRouter.get("/get", authUser, getUserCart);

export default cartRouter;
