import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useMemo } from "react";

const Collections = () => {
  const { products } = useContext(ShopContext);
  // const { pathname } = useLocation();
  // const mensCollections = pathname.slice(1, 4);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("revelant");

  const noImageAvailable = "https://via.placeholder.com/300x300?text=No+Image";

  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".gridItems",
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       stagger: 0.3,
  //     }
  //   );
  // }, [category, subCategory, sortType]);

  //!--------------ALL CATEGORIES TOGGLE---------------------
  const toggleCategory = (e) => {
    const { value } = e.target;
    if (category.includes(value)) {
      setCategory((prevstate) => prevstate.filter((item) => item !== value));
    } else {
      setCategory((prevstate) => [...prevstate, value]);
    }
  };

  const toggleSubCategory = (e) => {
    const { value } = e.target;
    if (subCategory.includes(value)) {
      setSubCategory((prevstate) => prevstate.filter((item) => item !== value));
    } else {
      setSubCategory((prevstate) => [...prevstate, value]);
    }
  };

  const applyFilter = () => {
    let filtered = products.slice();

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    if (sortType === "low-high") {
      filtered.sort((a, b) => a.price - b.price); // Ascending order
    } else if (sortType === "high-low") {
      filtered.sort((a, b) => b.price - a.price); // Descending order
    }
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    window.scroll(0, 0); //!scroll to top
    applyFilter();
  }, [category, subCategory, sortType]);

  return (
    <div className='sm:container container-none'>
      {/* -----------//!Main Sticky bar------------ */}
      <div className=' py-5  px-2  flex sm:justify-between max-sm:flex-col items-center sticky z-20 bg-white top-0'>
        <h1 className='text-2xl font-medium'>
          All Collections {filteredProducts.length}
        </h1>
        <div className='pr-5'>
          <select
            onChange={(e) => setSortType(e.target.value)}
            className=' border border-black'
          >
            <option value='revelent'>Revelant</option>
            <option value='low-high'>Low to High</option>
            <option value='high-low'>High to Low</option>
          </select>
        </div>
      </div>
      {/* //!Filter Section */}
      <div className='flex sm:pl-2 sm:flex-row flex-col '>
        <div className=' flex sm:flex-col sm:w-[30%] w-full overflow-x-auto justify-center py-4 bg-white z-20  gap-2 sticky top-[5rem] h-full accent-black '>
          {/* //!CATEGORY--------------------------------------- */}
          {/* //!we keeping both category in div becoz classname has peer so it will trigger both thats why */}
          <div>
            <input
              type='checkbox'
              className='peer'
              value='Men'
              id='men'
              hidden
              onClick={toggleCategory}
            />
            <label
              htmlFor='men'
              className='sm:text-xl text-lg cursor-pointer duration-150 peer-checked:font-bold   '
            >
              Men
            </label>
          </div>

          <div>
            <input
              type='checkbox'
              className='peer'
              value='Women'
              id='women'
              hidden
              onClick={toggleCategory}
            />
            <label
              htmlFor='women'
              className='sm:text-xl text-lg  cursor-pointer duration-150 peer-checked:font-bold   '
            >
              Women
            </label>
          </div>
          {/* //!SUBCATERGORY------------------------------------- */}
          <div>
            <input
              type='checkbox'
              value='Shoes'
              id='shoes'
              className='peer'
              hidden
              onClick={toggleSubCategory}
            />
            <label
              htmlFor='shoes'
              className='sm:text-xl text-lg  cursor-pointer duration-150 peer-checked:font-bold  '
            >
              Shoes
            </label>
          </div>

          <div>
            <input
              type='checkbox'
              value='T-shirt'
              id='T-shirt'
              className='peer'
              hidden
              onClick={toggleSubCategory}
            />
            <label
              htmlFor='T-shirt'
              className='sm:text-xl text-lg  cursor-pointer  duration-150 peer-checked:font-bold '
            >
              T-Shirts{" "}
            </label>
          </div>

          <div>
            <input
              type='checkbox'
              value='Lower'
              id='Lower'
              className='peer'
              hidden
              onClick={toggleSubCategory}
            />
            <label
              htmlFor='Lower'
              className='sm:text-xl text-lg  cursor-pointer duration-150 peer-checked:font-bold '
            >
              Lower{" "}
            </label>
          </div>
        </div>

        <div className='grid sm:grid-cols-3 grid-cols-2 w-full grid-rows-1 sm:gap-4 gap-1 '>
          {filteredProducts.length > 0
            ? filteredProducts?.map((item, index) => (
                <Link
                  key={index}
                  className='gridItems flex flex-col overflow-hidden border border-transparent hover:border-black'
                  to={`/products/${item._id}`}
                >
                  <img
                    src={item.image[0] ? item.image : noImageAvailable}
                    alt={item.name}
                    className='hover:scale-105 object-cover object-center  duration-300'
                  />

                  <div className='px-2'>
                    <p className=' font-medium text-md mt-5 truncate'>
                      {item.name}
                    </p>
                    <p className='text-gray-500 font-light'>
                      {item.category}&nbsp;{item.subCategory}
                    </p>
                    <p className='text-md font-semibold mt-4 '>
                      MRP ${item.price}
                    </p>
                  </div>
                </Link>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Collections;
