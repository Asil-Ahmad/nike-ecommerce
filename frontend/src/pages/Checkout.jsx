import React from "react";
import { Razorpay_logo, stripe_logo } from "../assets/icons";
import CartSummary from "../components/CartSummary";
import Transitions from "../components/Transitions";

const Checkout = () => {
  return (
    <Transitions>
      <div className='container py-10 sm:max-w-[900px] w-full'>
        <div className='sm:grid flex flex-wrap grid-cols-2 grid-rows-1 gap-4'>
          {/* //!Left grid */}
          <div className='w-full'>
            <h1 className='text-[1.75rem] font-medium'>Delivery</h1>
            <p className='text-gray-500 text-justify'>
              Customs regulation for India require a copy of the recipient's
              KYC.
              <strong>
                {" "}
                The address on the KYC needs to match the shipping address.
              </strong>{" "}
              The KYC will be stored securely and used solely for the purpose of
              clearing customs (including sharing it with customs officials) for
              all orders and returns. If your KYC does not match your shipping
              address, please click the link for more information.{" "}
              <a className='hover:underline cursor-pointer text-black'>
                Learn More
              </a>
            </p>

            <h2 className='text-[1.25rem] pt-10 font-medium'>
              Enter your name and address.
            </h2>
            <form action='' className='flex flex-col gap-4 mt-5 '>
              <input
                className='px-4 py-3 border border-gray-300 hover:border-black outline-none rounded-md '
                type='text'
                placeholder='First Name'
              />
              <input
                className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                type='text'
                placeholder='Last Name'
              />

              <input
                className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                type='text'
                placeholder='Street'
              />
              <div className='flex sm:justify-between lg:flex-row lg:gap-0 gap-4 flex-col'>
                <input
                  className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                  type='text'
                  placeholder='City'
                />
                <input
                  className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                  type='text'
                  placeholder='Pincode'
                />
              </div>
              <h2 className='text-[1.25rem] pt-10 font-medium'>
                What's your contact information?
              </h2>

              <input
                className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                type='email'
                required
                placeholder='Your Email'
              />
              <input
                className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                type='number'
                required
                placeholder='Phone Number'
              />
            </form>
            <hr className='my-10' />
            <h2 className='text-[1.75rem] pb-10 font-medium'>Payment</h2>
            <h3 className='text-[1.25rem] font-medium pb-5'>
              How would you like to pay?
            </h3>
            {/* //!Payment methods */}
            <div className='flex flex-col gap-5'>
              <button className='px-4  py-3 border border-gray-300  hover:border-black outline-none rounded-md '>
                <img src={Razorpay_logo} alt='' className='w-24 h-full  ' />
              </button>

              <button className='px-4  py-3 border border-gray-300  hover:border-black outline-none rounded-md '>
                <img
                  src={stripe_logo}
                  alt=''
                  className='w-24 h-[20px] object-left object-contain '
                />
              </button>

              <button className='px-4  py-3 border border-gray-300  hover:border-black outline-none rounded-md '>
                Cash on Delivery
              </button>
            </div>
          </div>

          {/* //!Right grid */}
          <div className='flex justify-center w-full relative'>
            <div className='flex flex-col w-full sticky top-[20%]'>
              <h1 className='text-[1.75rem] text-center font-medium'>
                Order Summary
              </h1>
              <div className='sm:px-10 pt-10'>
                <CartSummary />
              </div>
              <small className='text-[10px] text-center'>
                (The total reflects the price of your order, including all
                duties and taxes)
              </small>
            </div>
          </div>
        </div>
      </div>
    </Transitions>
  );
};

export default Checkout;
