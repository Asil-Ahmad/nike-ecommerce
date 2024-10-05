import { createContext } from "react";
import React, { useState, useEffect } from "react";
import {
  featuredProducts,
  featuredWomenProducts,
  latest,
  products,
  shopbysports,
  spotlights,
} from "../assets/images";
import { menFeaturedProducts } from "../assets/menImages";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const url = "http://localhost:4000";

  const navigate = useNavigate();
  const delivery_fee = 10;
  //!adding search feature on all web pages
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false); //!toggle show search bar
  const username = localStorage.getItem("username");
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({}); //!this will be object

  //!Adding Add to cart,product count and cart total
  const addToCart = (itemId, size) => {
    // if (!size) {
    //   alert("Please Select the size!");
    //   return;
    // }
    let cartData = structuredClone(cartItems);
    console.log(cartData);

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
    setCartItems(cartData);
  };

  //!total counts in cart
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalCount;
  };

  //!update cart items TO DELETE ITEMS

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find(
        (product) => product._id.toString() === items
      );
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {}
      }
    }
    return totalAmount;
  };

  // useEffect(() => {
  //   console.log("This is cartitems", cartItems);
  // }, [cartItems]);
  //!------------------------------------------------

  const value = {
    username, //logged username
    url,
    navigate,
    products,
    spotlights,
    shopbysports,
    featuredProducts,
    menFeaturedProducts,
    featuredWomenProducts,
    latest,
    //!search bar
    search,
    setSearch,
    showSearch,
    setShowSearch,
    //! user add to cart the items
    token,
    setToken,
    //!add to cart functionality
    addToCart,
    cartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,
    delivery_fee,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
