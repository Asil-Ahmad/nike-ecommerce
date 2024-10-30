import userModel from "../models/userModel.js";

//Add products to user cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.status(200).json({ message: "Added to cart", success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message, success: false });
  }
};

// Update  user cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;
    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;
    cartData[itemId][size] = quantity;
    await userModel.findByIdAndUpdate(userId, { cartData });
    console.log("test", cartData);
    res.status(200).json({ message: "Cart updated", success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message, success: false });
  }
};

//GET to user cart
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;
    const userData = await userModel.findById(userId);

    let cartData = await userData.cartData;
    res.status(200).json({ success: true, cartData });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
