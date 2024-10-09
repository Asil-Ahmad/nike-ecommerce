import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: Array, required: true }, //!We adding multiple array of images thats why we added type Array
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  sizes: { type: Array, required: true }, //!We adding multiple array of sizes thats why we added type Array
  bestseller: { type: Boolean }, //!We adding it for true false
  date: { type: Number, required: true },
});

const productModel = mongoose.models.product || mongoose.model("product", productSchema);

export default productModel;
