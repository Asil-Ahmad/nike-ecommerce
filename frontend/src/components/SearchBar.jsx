import React, { useState, useEffect } from "react";
import { nike } from "../assets/icons";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch, products } =
    useContext(ShopContext);
  const navigate = useNavigate();

  const [filterProducts, setFilterProducts] = useState([]);

  const applyFilter = () => {
    if (search) {
      // Apply filter only if there's a search term
      let filterItems = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilterProducts(filterItems);
    } else {
      //! when search is empty shows none
      setFilterProducts([]);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [search, showSearch]);

  // console.log(filterProducts);

  useGSAP(() => {
    gsap.from(".popsearch,.searchItems,.logo,#cancel", {
      opacity: 0,
      y: 0,
      delay: 0.5,
      stagger: 0.1,
    });
    gsap.from("#search", {
      width: 0,
      delay: 0.2,
    });
  }, [showSearch]);
  return showSearch ? (
    <motion.div
      initial={{ y: 50, x: 100, opacity: 0, scaleX: 0 }}
      animate={{ y: 0, x: 0, opacity: 1, scaleX: 1 }}
      exit={{ opacity: 0 }}
      className='w-full fixed z-50 top-0 bg-white shadow-2xl sm:h-[70vh] h-screen '
    >
      <div className='container pt-5 flex justify-between items-center'>
        <img src={nike} alt='' className='logo w-24 hidden sm:flex' />
        <input
          type='search'
          name=''
          id='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='w-3/4 px-5 py-3 bg-gray-100 rounded-full outline-none '
          placeholder='Search...'
        />
        <button id='cancel' onClick={() => setShowSearch(false)}>
          Cancel
        </button>
      </div>
      <div className='container flex  sm:flex-row flex-col gap-2 py-10'>
        <div className='popsearch sm:w-[20%]  text-2xl flex flex-col gap-4 mt-5'>
          <p className='text-sm text-gray-400'>Popular Search Terms</p>
          <p className='popsearch '>Air Force 1</p>
          <p className='popsearch '>Jordon</p>
          <p className='popsearch '>Air Max</p>
          <p className='popsearch '>Blazers</p>
        </div>
        <div className='flex gap-5 overflow-x-scroll sm:w-[80%] z-20 '>
          {filterProducts?.length > 0
            ? filterProducts.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col border border-transparent min-w-[200px] hover:border-black transition duration-200 p-1'
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className='searchItems w-[200px] h-[200px] object-cover object-center cursor-pointer'
                    key={index}
                    onClick={() => {
                      navigate(`/products/${item._id}`), setShowSearch(false);
                    }}
                  />
                  <p className='font-semibold pt-2 truncate'>{item.name}</p>
                  <p>${item.price}</p>
                </div>
              ))
            : ""}
        </div>
      </div>
      <div>{/* //!Search related items */}</div>
    </motion.div>
  ) : null;
};

export default SearchBar;
