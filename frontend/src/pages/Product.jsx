import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { cross, outlineheart, tick } from "../assets/icons";
import Transitions from "../components/Transitions";
import RelatedProducts from "../components/RelatedProducts";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Product = () => {
  const { products, addToCart, getCartCount } = useContext(ShopContext);

  const { productId } = useParams();
  const [currentProduct, setCurrentProduct] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [open, setOpen] = useState(false);

  document.title = currentProduct.name;

  //!We get details of products
  const fetchProduct = () => {
    products.map((item) => {
      if (item._id === productId) {
        setCurrentProduct(item);
        setImage(item.images[0]);
      }
      item;
      return null;
    });
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchProduct();

    // (currentProduct.category);
  }, [productId, products]); //!We have to add [productId] this otherwise it wont refresh the page as id changes

  useGSAP(() => {
    gsap.from("#box", {
      opacity: 0,
      width: 0,
      height: 0,
    });
  }, [open, setOpen]);

  const sizeError = () => {
    if (size) {
      addToCart(currentProduct._id, size), setOpen(true);
      document.getElementById("size").innerHTML = "Select Size";
      document.getElementById("size").style.color = "";
      document.getElementById("shakeError").style.border = "";
    } else {
      document.getElementById("size").innerHTML = "Please Select the Size.";
      document.getElementById("size").style.color = "red";
      document.getElementById("shakeError").style.border = "1px solid red";
      gsap.to("#shakeError", {
        x: -10,
        duration: 0.1,
        ease: "power1.inOut",
        yoyo: true,
        repeat: 5,
      });
    }
  };

  return (
    <Transitions>
      <div className='container py-10 relative  '>
        <div className='flex sm:justify-center gap-10 flex-wrap '>
          <div className='flex gap-5 justify-center sm:flex-row flex-col-reverse'>
            {/* //!side Small images */}
            <div className='flex sm:flex-col flex-row gap-2 overflow-x-auto '>
              {currentProduct.images &&
                currentProduct.images.map((item, index) => (
                  <img
                    key={index} // Add a unique key for each image
                    src={item}
                    alt={currentProduct.name}
                    onMouseEnter={() => setImage(item)}
                    className='rounded-xl w-[100px] h-[100px] hover:bg-gray-200 object-cover object-center'
                  />
                ))}
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
            <p className='py-5 max-w-[14.75rem] '>{currentProduct.description}</p>
            <p className='  tracking-widest'>MRP:$ {currentProduct.price} </p>
            <p className='text-gray-400'>Inclusive of all taxes</p>
            <p className='text-gray-400'>(Also includes all applicable duties)</p>

            {/* //!SELECT SIZE OF THE PRODUCTS------------------------------------- */}
            <div id='shakeError' className='p-2 border-transparent border-[1px] mt-2'>
              <p id='size' className='font-medium'>
                Select Size
              </p>
              <div className='grid grid-cols-4 grid-rows-1 gap-2 pt-5'>
                {currentProduct?.sizes?.map((item, index) => (
                  <button
                    onClick={() => setSize(item)}
                    key={index}
                    id='test'
                    className={`border p-2 text-center hover:border-black cursor-pointer 
                      ${item === size ? "border-black bg-gray-100" : ""} 
                     `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            {/* //! Add to cart button */}
            <button
              onClick={sizeError}
              className='bg-black hover:bg-black/50   mt-10 sticky bottom-2 text-white w-full text-center py-5 rounded-full'
              popovertarget='box'
            >
              Add to Bag
            </button>
            {/* //! Add to fav button */}
            <button className='border flex justify-center items-center gap-2 border-black mt-5 w-full text-center py-5 rounded-full'>
              Favourite <img src={outlineheart} alt='' className='w-6' />
            </button>
          </div>
        </div>

        {/* //!related producst */}
        <div className='my-10'>
          <h1 className='text-left text-3xl py-5'>Related Products</h1>
          <RelatedProducts
            category={currentProduct.category}
            subCategory={currentProduct.subCategory}
          />
        </div>
      </div>

      {/* //!--------------------------------Added to cart popup confirm the item has been added--------------- */}
      {/* open only when size is selected only */}

      {open && size.length > 0 ? (
        <div
          onClick={() => setOpen(false)}
          className='bg-black/50 w-full h-[100vh] flex justify-center top-0 fixed m-auto'
        >
          <div
            id='box'
            //  popover='auto'
            className='bg-white overflow-hidden shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] z-20 w-[300px] h-[300px] 
            rounded-3xl p-4 absolute top-[10%] right-[6%] max-sm:right-[5%]'
          >
            <div className='flex justify-between items-center'>
              <p className='flex gap-2'>
                <img src={tick} alt='' className='w-5' />
                Added to Bag
              </p>
              <img
                onClick={() => setOpen(!open)}
                src={cross}
                alt=''
                className='w-5 bg-gray-300 rounded-full'
              />
            </div>
            <div className='py-4 flex gap-4'>
              <img src={image} alt='' className='w-20 h-20' />
              <div className='flex flex-col'>
                <p className='font-medium truncate'>{currentProduct.name.slice(0, 16)}...</p>
                <p className='text-gray-400  text-sm'> {currentProduct.category}</p>
                <p className='text-gray-400  text-sm'>{currentProduct.subCategory}</p>
                <p className='text-gray-400  text-sm'>Size: {size}</p>
                <p className='text-gray-400  text-sm'>MRP: $ {currentProduct.price}.00</p>
                <p className='text-gray-400 text-sm'>Inclusive of all taxes</p>
                <small className='text-gray-400'>(Also includes all applicable duties)</small>
              </div>
            </div>
            <div className='flex justify-between items-center'>
              <Link to='/cart' className=' text-sm py-2 px-3 border rounded-full'>
                View Bag ({getCartCount()})
              </Link>
              <button className='text-sm py-2 px-3 bg-black text-white rounded-full'>
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </Transitions>
  );
};

export default Product;
