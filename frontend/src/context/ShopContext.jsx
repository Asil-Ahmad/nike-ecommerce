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
import { toast } from "react-toastify";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const url = "http://localhost:4000";
  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();
  const delivery_fee = 10;
  //!adding search feature on all web pages
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false); //!toggle show search bar
  const username = localStorage.getItem("username");

  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState({}); //!this will be object
  const [products, setProducts] = useState([]);

  //!Adding Add to cart,product count and cart total
  const addToCart = async (itemId, size) => {
    // if (!size) {
    //   alert("Please Select the size!");
    //   return;
    // }
    let cartData = structuredClone(cartItems);

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

    //calling backend to save cart data below
    if (token) {
      try {
        await axios.post(backendURL + "/api/cart/add", { itemId, size }, { headers: { token } });
      } catch (error) {
        error;
        toast.error(error.message);
      }
    }
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
    if (token) {
      try {
        await axios.post(
          backendURL + "/api/cart/update",
          { itemId, size, quantity },
          { headers: { token } }
        );
      } catch (error) {
        error;
        toast.error(error.message);
      }
    }
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id.toString() === items);
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

  //!Getting data from backend now
  const getProductsData = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list-products");
      // (response.data);
      const { products } = response.data;
      if (response.data.success) {
        setProducts(products);
        // (products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //!Now we want to fetch cart data for auth user
  const getCartUser = async (token) => {
    try {
      const response = await axios.post(backendURL + "/api/cart/get", {}, { headers: { token } });

      if (response.data.success) {
        setCartItems(response.data.cartData);
      }
    } catch (error) {
      error.response.data;
      // toast.error(error.message);
    }
  };
  // useEffect(() => {
  //   getProductsData();
  //   if (!token && localStorage.getItem("token")) {
  //     setToken(localStorage.getItem("token"));
  //     getCartUser(localStorage.getItem("token"));
  //   }
  // }, [token]);

  useEffect(() => {
    getProductsData();
    getCartUser(localStorage.getItem("token"));
    setToken(localStorage.getItem("token"));
    // (token);
  }, [token]);
  //as we login user we cant see cartItems so we added token dependency in useEffect so when it gets token we trigger cartItems
  //!fixed the bug on add to cart wont work after refresh the page in ShopContext.jsx >use Effect we forgot to add token to whole context of the app
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
    setCartItems,
    getCartCount,
    updateQuantity,
    getCartAmount,

    delivery_fee,
    backendURL,
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};
export default ShopContextProvider;
