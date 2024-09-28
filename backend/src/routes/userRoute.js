import {
  addUser,
  loginUser,
  listUser,
  deleteUser,
} from "../controllers/userController.js";
import express from "express";
import upload from "../middleware/multer.js";

//!To create routes we have to use express.router

const userRouter = express.Router();

//!Here we add METHODS
userRouter.get("/list", listUser);
userRouter.post("/add", upload.single("image"), addUser);
userRouter.post("/login", upload.none(), loginUser);
userRouter.delete("/remove", upload.none(), deleteUser);

export default userRouter;
