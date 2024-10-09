import upload from "../middleware/multer.js";
import { v2 as cloudinary } from "cloudinary"; //add image
import productModel from "../models/productModel.js";

//function for add products
const addProducts = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;
    const images = req.files; //!to add multiple images

    console.log(name, description, price, category, subCategory, sizes, bestseller);
    // console.log("images", images);
    // console.log("Files", req.files);

    //!---------------------Sending multiple images to cloundinary----------------
    const imageUrls = [];
    // Upload each image using a loop
    for (const image of images) {
      const imageUpload = await cloudinary.uploader.upload(image.path, {
        resource_type: "image",
      });
      imageUrls.push(imageUpload.secure_url);
    }
    console.log("Uploaded image URLs", imageUrls);

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: Array.isArray(sizes) ? sizes : [sizes],//!This convert them to array
      bestseller: bestseller === "true" ? true : false,
      images: imageUrls,
      date: Date.now(),
    };
    console.log(productData);

    const products = new productModel(productData);
    await products.save();

    res.status(200).json({ success: true, message: "Product added successfully" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

//list of products
const listProducts = async (req, res) => {};

//remove products
const removeProducts = async (req, res) => {};

//info of single product
const singleProducts = async (req, res) => {};

export { addProducts, listProducts, removeProducts, singleProducts };
