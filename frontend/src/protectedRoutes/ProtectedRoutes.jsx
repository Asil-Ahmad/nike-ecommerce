import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Protected = () => {
  const token = localStorage.getItem("token");
  console.log("this", token);

  return token ? <Outlet /> : <Navigate to='/signin' />;
};

export default Protected;
