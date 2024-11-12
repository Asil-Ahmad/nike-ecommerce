import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";
//Toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const backendURL = import.meta.env.VITE_BACKEND_URL;
backendURL;

const App = () => {
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  return (
    <div>
      <ToastContainer />
      {token === "" ? <AdminLogin setToken={setToken} /> : <Home token={token} />}
    </div>
  );
};

export default App;
