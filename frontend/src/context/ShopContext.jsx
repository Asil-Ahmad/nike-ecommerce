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

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const url = "http://localhost:4000";
  //!adding search feature on all web pages
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false); //!toggle show search bar
  const username = localStorage.getItem("username");
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({}); //!this will be object

  const addToCart = (name,itemId, size) => {
    if (!size) {
      alert("Please Select the size!");
      return;
    }
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
  useEffect(() => {
    console.log("This is cartitems", cartItems);
  }, [cartItems]);

  const value = {
    username, //logged username
    url,
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
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
