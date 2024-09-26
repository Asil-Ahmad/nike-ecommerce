import express from "express";
import cors from "cors";
import userRouter from "./src/routes/userRoute.js";
import connectDB from "./src/config/mongodb.js";
import "dotenv/config";

const app = express();

// Middleware for parsing JSON and form-encoded data
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: false })); // Parse form data (application/x-www-form-urlencoded)
app.use(cors());

// Connect to MongoDB
connectDB();

// Use userRouter for all /api/user routes

app.get("/", (req, res) => res.json({ message: "Connected to API " }));
app.use("/api/user", userRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server started on port ${port}`));
