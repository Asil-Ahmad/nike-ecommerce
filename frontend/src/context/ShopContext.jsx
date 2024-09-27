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
  const username = localStorage.getItem("username");
  const [token, setToken] = useState("");
  const value = {
    username, //logged username
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
    //! user add to cart the items
    token,
    setToken,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;
