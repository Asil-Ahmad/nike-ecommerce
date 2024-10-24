import React from "react";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "../pages/Add";
import Remove from "../pages/Remove";
import List from "../pages/List";

const Home = () => {
  return (
    <div className='w-full flex'>
      <Sidebar />
      <div className='w-full bg-gray-300  '>
        <div className=' sm:pl-0 pl-10 pr-3'>
          <Routes>
            <Route path='/add' element={<Add />} />
            <Route path='/remove' element={<Remove />} />
            <Route path='/list' element={<List />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
