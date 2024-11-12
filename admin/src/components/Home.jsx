import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "../pages/Add";
import List from "../pages/List";
import Information from "../pages/Information";
import Orders from "../pages/Orders";

const Home = ({ token }) => {
  return (
    <div className='w-full flex'>
      <Sidebar />
      <div className='w-full bg-gray-200  '>
        <div className=' sm:pl-0 pl-10 '>
          <Routes>
            <Route path='/add' element={<Add token={token} />} />
            <Route path='/orders' element={<Orders token={token} />} />
            <Route path='/list' element={<List token={token} />} />
            <Route path='/info' element={<Information />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
