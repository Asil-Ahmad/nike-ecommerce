import express from "express";
import upload from "../middleware/multer.js";
import {
  addProducts,
  listProducts,
  removeProducts,
  singleProducts,
} from "../controllers/productController.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

// productRouter.post("/products", upload.array("images", 5), addProducts);
productRouter.post("/add-products", adminAuth, upload.array("images", 4), addProducts);
productRouter.post("/remove", adminAuth, upload.none(), removeProducts);
productRouter.get("/list-products", listProducts);
productRouter.get("/info-product", singleProducts);

export default productRouter;
