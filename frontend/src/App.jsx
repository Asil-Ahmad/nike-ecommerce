import React from "react";
import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./components/Home";
import Product from "./pages/Product";
import SearchBar from "./components/SearchBar";
import MenCollections from "./components/MenCollections";
import WomenCollections from "./components/WomenCollections";
import KidCollections from "./components/KidCollections";
import Footer from "./components/Footer";
import Collections from "./components/Collections";

const App = () => {
  const { pathname } = useLocation();
  const footerHidden = ["/login", "/register"].includes(pathname);
  return (
    <div>
      <Navbar />
      <SearchBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:productId' element={<Product />} />
        <Route path='/men' element={<MenCollections />} />
        <Route path='/women' element={<WomenCollections />} />
        <Route path='/kids' element={<KidCollections />} />
        <Route path='/collections' element={<Collections />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {!footerHidden && <Footer />}
    </div>
  );
};

export default App;
