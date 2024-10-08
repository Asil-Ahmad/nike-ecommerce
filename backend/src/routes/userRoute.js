import {
  registerUser,
  loginUser,
  listUser,
  deleteUser,
  adminLogin,
} from "../controllers/userController.js";
import express from "express";
import upload from "../middleware/multer.js";

//!To create routes we have to use express.router

const userRouter = express.Router();

//!Here we add METHODS
userRouter.get("/list", listUser);
userRouter.post("/register", upload.single("image"), registerUser);
userRouter.post("/login", upload.none(), loginUser);
userRouter.delete("/remove", upload.none(), deleteUser);

export default userRouter;
