import express from "express";
import cors from "cors";
import userRouter from "./src/routes/userRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";
import "dotenv/config";
import productRouter from "./src/routes/productRoute.js";
import cartRouter from "./src/routes/cartRoute.js";
import orderRouter from "./src/routes/orderRoute.js";

const app = express();

// Middleware for parsing JSON and form-encoded data
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse form data (application/x-www-form-urlencoded)
app.use(cors()); //to connect frontend with backend

connectDB(); // Connect to MongoDB
connectCloudinary(); //for connect cloudinary from config
// Use userRouter for all /api/user routes

app.get("/", (req, res) => res.json({ message: "Connected to API " }));
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => `Server started on port ${port}`);
