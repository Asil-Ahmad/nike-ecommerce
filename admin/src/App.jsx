import React, { useState } from "react";
import Home from "./components/Home";
import AdminLogin from "./components/AdminLogin";

export const backendURL = import.meta.env.VITE_BACKEND_URL;
console.log(backendURL);

const App = () => {
  const [token, setToken] = useState("");
  return <div>{token === "" ? <AdminLogin setToken={setToken} /> : <Home />}</div>;
};

export default App;
