import express from "express";
import upload from "../middleware/multer.js";
import {
  addProducts,
  listProducts,
  removeProducts,
  singleProducts,
} from "../controllers/productController.js";

const productRouter = express.Router();

// productRouter.post("/products", upload.array("images", 5), addProducts);
productRouter.post("/add-products", upload.array("images", 4), addProducts);
productRouter.get("/list-products", listProducts);
productRouter.delete("/remove-products", removeProducts);
productRouter.get("/info-product", singleProducts);

export default productRouter;
