import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  image: { type: String, default: "" },//!we added default so may or maynot required
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;
