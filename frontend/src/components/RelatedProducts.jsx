import React from "react";
import { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const RelatedProducts = ({ category, subCategory }) => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let productsCopy = products.slice();
      productsCopy = productsCopy.filter(
        (item) => category === item.category && subCategory === item.subCategory
      ); //!remember to add productCOpy=

      setRelated(productsCopy.slice(0, 5));
    }
  }, [products, category, subCategory]);
  return (
    <div className='grid sm:grid-cols-5 grid-cols-2 overflow-x-scroll w-full sm:gap-4 gap-1 '>
      {related?.map((item, index) => (
        <Link
          key={index}
          className=' flex flex-col overflow-hidden border border-transparent hover:border-black'
          to={`/products/${item._id}`}
        >
          <img
            // src={item.image[0] ? item.image : noImageAvailable}
            src={item.image[0]}
            alt={item.name}
            className='hover:scale-105 object-cover object-center  '
          />

          <div className='px-2'>
            <p className=' font-medium text-md mt-5 truncate'>{item.name}</p>
            <p className='text-gray-500 font-light'>
              {item.category}&nbsp;{item.subCategory}
            </p>
            <p className='text-md font-semibold mt-4 '>MRP ${item.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RelatedProducts;
