import {
  placeOrderCash,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";
import express from "express";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//Admin Features
orderRouter.post("/list", adminAuth, upload.none(), allOrders);
orderRouter.post("/status", adminAuth, upload.none(), updateStatus);

//Payment Features
orderRouter.post("/place", authUser, upload.none(), placeOrderCash);
orderRouter.post("/stripe", authUser, upload.none(), placeOrderStripe);
orderRouter.post("/razorpay", authUser, upload.none(), placeOrderRazorpay);

//User Features
orderRouter.post("/userorders", authUser, upload.none(), userOrders);

export default orderRouter;
