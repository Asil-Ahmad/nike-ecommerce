import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () => {
    console.log("connected to db");
  });
  await mongoose.connect(`${process.env.MONGODB_URI}/test`);
  // console.log(process.env.MONGODB_URL);
};

export default connectDB;
