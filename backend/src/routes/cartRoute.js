import { addToCart, updateCart, getUserCart } from "../controllers/cartController.js";
import express from "express";
import upload from "../middleware/multer.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authUser, upload.none(), addToCart);
cartRouter.post("/update", authUser, upload.none(), updateCart);
cartRouter.post("/get", authUser, upload.none(), getUserCart);

export default cartRouter;
