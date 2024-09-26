import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { outlineheart } from "../assets/icons";
import Transitions from "../components/Transitions";
import {
  nikeit42,
  nikeit43,
  nikeit44,
  nikeit45,
  nikeit46,
  nikeit47,
} from "../assets/images";

const Product = () => {
  const { productId } = useParams();
  const { products } = useContext(ShopContext);
  const [currentProduct, setCurrentProduct] = useState("");
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [cart, setCart] = useState("");
  document.title = currentProduct.name;

  const fetchProduct = () => {
    products.map((item) => {
      if (item._id === Number(productId)) {
        setCurrentProduct(item);
        setImage(item.image[0]);
        // console.log(item);
      }
    });
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchProduct();
  }, [productId]); //!We have to add [productId] this otherwise it wont refresh the page as id changes

  return (
    <Transitions>
      <div className='container py-10'>
        <div className='flex sm:justify-center gap-10 flex-wrap '>
          <div className='flex gap-5 justify-center sm:flex-row flex-col-reverse'>
            {/* //!Small images */}
            <div className='flex sm:flex-col flex-row gap-2 overflow-x-auto '>
            <img
                src={nikeit43}
                alt={currentProduct.name}
                onMouseEnter={() => setImage(nikeit43)}
                className='rounded-xl w-[100px] h-[100px] object-cover object-center'
              />

              <img
                src={nikeit43}
                alt={currentProduct.name}
                onMouseEnter={() => setImage(nikeit43)}
                className='rounded-xl w-[100px] h-[100px] object-cover object-center'
              />
              <img
                src={nikeit42}
                alt={currentProduct.name}
                onMouseEnter={() => setImage(nikeit42)}
                className='rounded-xl w-[100px] h-[100px] object-cover object-center'
              />
              <img
                src={nikeit44}
                alt={currentProduct.name}
                onMouseEnter={() => setImage(nikeit44)}
                className='rounded-xl w-[100px] h-[100px] object-cover object-center'
              />
              <img
                src={nikeit45}
                alt={currentProduct.name}
                onMouseEnter={() => setImage(nikeit45)}
                className='rounded-xl w-[100px] h-[100px] object-cover object-center'
              />
              <img
                src={nikeit46}
                alt={currentProduct.name}
                onMouseEnter={() => setImage(nikeit46)}
                className='rounded-xl w-[100px] h-[100px] object-cover object-center'
              />
            </div>

            {/* //!Main Product image  */}
            <img
              src={image}
              alt={currentProduct.name}
              className='rounded-xl  shadow-xl sm:w-[495px] sm:h-[610px] object-cover object-center'
            />
          </div>
          <div className='flex flex-col max-sm:w-full'>
            <p className='text-xl'>{currentProduct.name}</p>
            <p className='font-medium'>
              {currentProduct.category}&nbsp;
              {currentProduct.subCategory}
            </p>
            <p className='py-5'>{currentProduct.description}</p>
            <p className='  tracking-widest'>MRP:$ {currentProduct.price} </p>
            <p className='text-gray-400'>Inclusive of all taxes</p>
            <p className='text-gray-400'>
              (Also includes all applicable duties)
            </p>

            <div className='pt-5'>
              <p className='font-medium'>Select Size</p>
              <div className='grid grid-cols-4 grid-rows-1 gap-2 pt-5'>
                {currentProduct?.sizes?.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    key={index}
                    className={`border p-2 text-center hover:border-black cursor-pointer ${
                      item === size ? "border-black bg-gray-100" : ""
                    } `}
                  >
                    UK {item}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                setCart(currentProduct.price);
              }}
              className='bg-black hover:bg-black/50  active:bg-green-500 mt-10 sticky bottom-2 text-white w-full text-center py-5 rounded-full'
              popovertarget='box'
            >
              Add to Bag
            </button>
            <button className='border flex justify-center items-center gap-2 border-black mt-5  w-full text-center py-5 rounded-full'>
              Favourite <img src={outlineheart} alt='' className='w-6' />
            </button>
          </div>
        </div>
      </div>
      <div
        id='box'
        popover='auto'
        className='bg-black  w-full transition-all duration-300 content-center '
      >
        <p className='text-white text-2xl text-center font-anton'>
          Item Added to Your Cart
        </p>
      </div>
    </Transitions>
  );
};

export default Product;
