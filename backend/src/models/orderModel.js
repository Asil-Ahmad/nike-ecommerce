import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  items: { type: Array, required: true }, //show products data we have ordered
  amount: { type: Number, required: true },
  address: { type: Object, required: true },
  status: { type: String, required: true, default: "Order Placed" },//When new order the status will be Order Placed
  paymentMethod: { type: String, required: true },
  payment: { type: Boolean, required: true, default: false }, //when new order is placed then by default payment will false,but when go gateway
  //we make default true
  date: { type: Number, required: true },//here we will use Date.now()
});

const orderModel = mongoose.models.order || mongoose.model("order", orderSchema);

export default orderModel;
