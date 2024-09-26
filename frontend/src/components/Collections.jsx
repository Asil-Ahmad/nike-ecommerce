import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useMemo } from "react";

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState(false);
  const [category, setCategory] = useState([]);
  // console.log(products);
  const noImageAvailable = "https://via.placeholder.com/300x300?text=No+Image";

  useGSAP(() => {
    gsap.from(".gridItems", {
      opacity: 0,
      y: 0,
      delay: 0.5,
      stagger: 0.1,
    });
  }, [category]);

  const toggleCategory = (e) => {
    const { value } = e.target;

    if (category.includes(value)) {
      setCategory((prevstate) => prevstate.filter((item) => item !== value));
    } else {
      setCategory((prevstate) => [...prevstate, value]);
    }
  };

  const applyFilter = () => {
    let filtered = products.slice();
    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.subCategory));
      console.log(filtered);
    }
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    window.scroll(0, 0); //!scroll to top

    applyFilter();
    console.log(category, products);
  }, [category]);

  return (
    <div className='sm:container container-none'>
      {/* -----------//!Main Sticky bar------------ */}
      <div className=' py-5 sm:px-0 px-2  flex justify-between items-center sticky z-20 bg-white top-0'>
        <h1 className='text-2xl font-medium'>
          All Collections ({products.length})
        </h1>
        <div className='pr-5'>
          <select name='' id=''>
            <option value=''>Revelant</option>
            <option value=''>High to Low</option>
            <option value=''>Low to High</option>
          </select>
        </div>
      </div>
      {/* //!Filter Section */}
      <div className='flex '>
        <div className=' sm:flex hidden flex-col w-[30%] gap-2 sticky top-[5rem] h-screen accent-black '>
          <label htmlFor='shoes' className='text-xl cursor-pointer '>
            Shoes
            <input
              type='checkbox'
              value='Shoes'
              id='shoes'
              hidden
              onClick={toggleCategory}
            />
          </label>
          <label htmlFor='T-shirt' className='text-xl cursor-pointer'>
            T-Shirts{" "}
            <input
              type='checkbox'
              value='T-shirt'
              id='T-shirt'
              hidden
              onClick={toggleCategory}
            />
          </label>
          <label htmlFor='Lower' className='text-xl cursor-pointer'>
            Lower{" "}
            <input
              type='checkbox'
              value='Lower'
              id='Lower'
              hidden
              onClick={toggleCategory}
            />
          </label>
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
