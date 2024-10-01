import React from "react";
import { nikeit42 } from "../assets/images";

const Cart = () => {
  return (
    <div className='lg:px-[100px] px-2 flex sm:flex-row flex-col justify-between items-start py-10 gap-10'>
      <div className='bag sm:w-[65%] w-full'>
        <h1 className='text-3xl'>Bag</h1>
        <div className='flex justify-between mt-5'>
          <div className='flex gap-4'>
            <img src={nikeit42} alt='' className='sm:size-[10rem] size-24' />
            <div className='flex flex-col'>
              <p>Hello</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Hello</p>
              <p>QUantity</p>
            </div>
          </div>
          <p>$200.00</p>
        </div>
        <hr className='my-5' />
        <div className='flex justify-between'>
          <div className='flex gap-4'>
            <img src={nikeit42} alt='' className='sm:size-[10rem] size-24' />
            <div className='flex flex-col'>
              <p>Hello</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Hello</p>
              <p>QUantity</p>
            </div>
          </div>
          <p>$200.00</p>
        </div>
        <hr className='my-5' />
        <div className='flex justify-between'>
          <div className='flex gap-4'>
            <img src={nikeit42} alt='' className='sm:size-[10rem] size-24' />
            <div className='flex flex-col'>
              <p>Hello</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Hello</p>
              <p>QUantity</p>
            </div>
          </div>
          <p>$200.00</p>
        </div>
      </div>

      <div className='cart sm:w-[35%] w-full flex flex-col gap-5'>
        <h1 className='text-3xl'>Summary</h1>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>$3000.00</p>
        </div>
        <div className='flex justify-between'>
          <p>Delivery</p>
          <p>$30.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Total</p>
          <p>$3030.00</p>
        </div>
        <hr />
        <button className='bg-black rounded-full text-white py-4'>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
