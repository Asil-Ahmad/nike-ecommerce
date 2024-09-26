import { createContext } from "react";
import React, { useState } from "react";
import {
  featuredProducts,
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
  const [user, setUser] = useState("");
  const [cart, setCart] = useState("");
  const value = {
    url,
    products,
    spotlights,
    shopbysports,
    featuredProducts,
    menFeaturedProducts,
    latest,
    //!search bar
    search,
    setSearch,
    showSearch,
    setShowSearch,
    // !user Auth we need to show user on all across the app
    user,
    setUser,
    //! user add to cart the items
    cart,
    setCart,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
