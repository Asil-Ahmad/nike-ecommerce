import React, { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Loader from "../constants/Loader";
import { delete_icon, delete_icon_solid } from "../assets/icons";

const Cart = () => {
  const {
    products,
    cartItems,
    updateQuantity,
    getCartAmount,
    delivery_fee,
    navigate,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]); //!empty array
  const [removeItem, setRemoveItem] = useState(delete_icon);
  //   const [quantityValue, setQuantityValue] = useState("");
  const submitRef = useRef();

  //   let { disabled } = submitRef.current;

  const test = () => {
    console.log("test");
  };

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  //   console.log("getCartAmount:-", getCartAmount());

  useGSAP(() => {
    gsap.fromTo(
      ".priceUpdate",
      {
        backgroundColor: "gray",
      },
      {
        backgroundColor: "white",
      }
    );
  }, [getCartAmount()]);

  return (
    <div className='lg:px-[100px] px-2 flex sm:flex-row flex-col justify-between items-start py-10 gap-4'>
      <div className='flex flex-col bag sm:w-[65%] w-full'>
        {/* //!This shows total cart items in bag if not then shows only bag below h1 */}
        <h1 className='text-3xl'>
          Bag {cartData?.length > 0 && `(${cartData.length})`}
        </h1>
        {cartData.length > 0 ? (
          cartData?.map((item, index) => {
            const productData = products?.find(
              (product) => product._id.toString() === item._id //todo remeber id wasnt a string so we have converted to string
            );
            return (
              <div key={index}>
                <div className='flex justify-between mt-5 '>
                  <div className='flex gap-4'>
                    <img
                      src={productData.image[0]}
                      alt=''
                      className='sm:size-[10rem] size-24'
                    />
                    <div className='flex flex-col'>
                      <p className='font-medium truncate'>{productData.name}</p>
                      {/* <p className='text-gray-400'>{productData.description}</p> */}
                      <p className='text-gray-400'>{productData.category}</p>
                      <p className='text-gray-400'>{productData.subCategory}</p>
                      <p className='text-gray-400'>Size: {item.size}</p>
                      <div className='flex'>
                        <label className='text-gray-400' htmlFor='quantity'>
                          Quantity &nbsp;
                        </label>
                        <input
                          onChange={(e) =>
                            e.target.value === "" || e.target.value === "0"
                              ? null
                              : updateQuantity(
                                  item._id,
                                  item.size,
                                  Number(e.target.value)
                                )
                          }
                          type='number'
                          id='quantity'
                          min={1}
                          defaultValue={item.quantity}
                          className='border text-center max-w-10 '
                        />
                      </div>
                      <img
                        src={removeItem}
                        onMouseEnter={() => setRemoveItem(delete_icon_solid)}
                        onMouseLeave={() => setRemoveItem(delete_icon)}
                        alt='delete icon'
                        onClick={() => updateQuantity(item._id, item.size, 0)}
                        className='w-5'
                      />
                    </div>
                  </div>
                  <p className='text-right text-gray-600'>
                    MRP: $ {productData.price}.00
                  </p>
                </div>
                <hr className='my-5' />
              </div>
            );
          })
        ) : (
          <h1 className='font-anton text-center content-center text-xl animate-pulse '>
            Your Cart is Empty
          </h1>
        )}
      </div>

      <div className='cart sm:w-[35%] sticky h-full top-20 w-full flex flex-col gap-5'>
        <h1 className='text-3xl'>Summary</h1>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p className='priceUpdate'>${getCartAmount()}.00</p>
        </div>
        <div className='flex justify-between'>
          <p>Delivery</p>
          <p>$10.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Total</p>
          <p className='priceUpdate'>
            ${getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee}.00
          </p>
        </div>
        <hr />
        <input
          type='submit'
          value='Checkout'
          ref={submitRef}
          disabled={cartData.length === 0}
          onClick={() => navigate("/checkout")}
          className='rounded-full  disabled:bg-black/50 disabled:cursor-not-allowed text-white bg-black cursor-pointer py-4'
        />
      </div>
    </div>
  );
};

export default Cart;
