import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//Placing order using COD
const placeOrderCash = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();
    //now after this we have to clear the cart data
    await userModel.findByIdAndUpdate(userId, { cartData: {} });
    res.status(200).json({ success: true, message: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};

//Placing order using Stripe
const placeOrderStripe = async (req, res) => {};

//Placing order using RazorPay
const placeOrderRazorpay = async (req, res) => {};

//Show all orders on admin Panel
const allOrders = async (req, res) => {};

//Show User Order data for frontend
const userOrders = async (req, res) => {};

//update order status on click on admin Panel
const updateStatus = async (req, res) => {};

export {
  placeOrderCash,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateStatus,
};
