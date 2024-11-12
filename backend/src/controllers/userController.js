import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import { v2 as cloudinary } from "cloudinary"; //add image
import upload from "../middleware/multer.js"; //middleware
import validator from "validator";
import bcrypt from "bcrypt";

const createToken = (id, name) => {
  return jwt.sign({ id, name }, process.env.JWT_SECRET);
};

//!List all users in database
const listUser = async (req, res) => {
  try {
    const allUser = await userModel.find({});
    res.status(200).json({ message: "success", allUser: allUser });
  } catch (error) {}
};

//!Register user with new emial
const registerUser = async (req, res) => {
  try {
    const { email, name, password } = req.body; //!we extract these from req.body
    const imageFile = req.file; //!need to add file

    let imageUrl = ""; //!if no file we get this url image else true we use user upload image
    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
        resource_type: "image",
      });
      imageUrl = imageUpload.secure_url;
    }
    const isEmailExist = await userModel.findOne({ email: email });
    if (isEmailExist) {
      return res.status(400).json({ success: false, message: "Email already exist" });
    }
    //  //!Using validator to check is email format and bcrycpt for strong password
    //  if (!validator.isEmail(email)) {
    //   return res.status(400).json({ success: false, message: "Enter a valid email" });
    // }
    if (password.length < 8) {
      return res.status(400).json({ success: false, message: "Use a strong password" });
    }
    //!if above conditions are correct then we go here
    //!todo Hashing user password
    const salt = await bcrypt.genSalt(10); //!this will create a random 10 letter password to save in database
    const hashedPassword = await bcrypt.hash(password, salt);

    //  (email, name, password,imageUpload);
    // //!here we send data to mongodb
    const userData = {
      email,
      name,
      password: hashedPassword,
      image: imageUrl,
    };

    const user = userModel(userData);
    await user.save();

    res.status(200).json({ message: "User Added Succesfully" });
  } catch (error) {
    error;
  }
};

//!Using Promise to Login User
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(email + password, process.env.JWT_SECRET);
      res.status(200).json({ message: "success", token });
    } else {
      res.status(400).json({ message: "Wrong Admin Input" });
    }
  } catch (error) {
    res.status(400).json({ message: "error" });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    // (email,password,user);

    if (!user) {
      return res.status(400).json({ success: false, message: "User doesnt exist" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (isPasswordMatch) {
      const { _id, name } = user;
      const token = createToken(_id);
      res.status(200).json({ message: "User is login", token, name });
    } else {
      res.status(400).json({ message: "Incorrect password" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  const userID = req.body.id;
  userID;

  try {
    await userModel.findByIdAndDelete(userID);
    res.status(200).json({ message: "User Deleted" });
  } catch (error) {
    res.status(400).json({ message: "Cannot find user" });
  }
};

export { registerUser, loginUser, listUser, deleteUser, adminLogin };
