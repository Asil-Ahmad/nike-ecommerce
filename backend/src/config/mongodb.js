import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    ("connected to db");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/test`);
  // (process.env.MONGODB_URL);
};

export default connectDB;
