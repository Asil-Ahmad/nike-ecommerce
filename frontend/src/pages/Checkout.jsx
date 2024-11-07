import React, { useContext, useState } from "react";
import { Razorpay_logo, stripe_logo } from "../assets/icons";
import CartSummary from "../components/CartSummary";
import Transitions from "../components/Transitions";
import { ShopContext } from "../context/ShopContext";
import { toast } from "react-toastify";
import axios from "axios";
import { products } from "../assets/images";

const Checkout = () => {
  const {
    navigate,
    products,
    token,
    backendURL,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
  } = useContext(ShopContext);
  const [paymentOption, setPaymentOption] = useState("cod");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    pincode: "",
    email: "",
    phone: "",
  });

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //we create orderItems which tells what items user has ordered
    try {
      const orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(products.find((product) => product._id === items));
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      console.log(orderItems);

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (paymentOption) {
        case "cod":
          const res = await axios.post(`${backendURL}/api/order/place`, orderData, {
            headers: { token },
          });

          if (res.data.message) {
            toast.success(res.data.message);
            setCartItems({});
            navigate("/orders");
          } else {
            console.log("An Error Occured");
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Transitions>
      <form onSubmit={onSubmitHandler} className='container py-10 sm:max-w-[900px] w-full'>
        <div className='sm:grid flex flex-wrap grid-cols-2 grid-rows-1 gap-4'>
          {/* //!Left grid */}
          <div className='w-full'>
            <h1 className='text-[1.75rem] font-medium'>Delivery</h1>
            <p className='text-gray-500 text-justify'>
              Customs regulation for India require a copy of the recipient's KYC.
              <strong> The address on the KYC needs to match the shipping address.</strong> The KYC
              will be stored securely and used solely for the purpose of clearing customs (including
              sharing it with customs officials) for all orders and returns. If your KYC does not
              match your shipping address, please click the link for more information.{" "}
              <a className='hover:underline cursor-pointer text-black'>Learn More</a>
            </p>

            <h2 className='text-[1.25rem] pt-10 font-medium'>Enter your name and address.</h2>
            <div className='flex flex-col gap-4 mt-5 '>
              <input
                className='px-4 py-3 border border-gray-300 hover:border-black outline-none rounded-md '
                type='text'
                required
                onChange={onChangeHandler}
                name='firstName'
                value={formData.firstName}
                placeholder='First Name'
              />
              <input
                className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                type='text'
                required
                onChange={onChangeHandler}
                name='lastName'
                value={formData.lastName}
                placeholder='Last Name'
              />

              <input
                className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                type='text'
                required
                onChange={onChangeHandler}
                name='street'
                value={formData.street}
                placeholder='Street'
              />
              <div className='flex sm:justify-between lg:flex-row lg:gap-0 gap-4 flex-col'>
                <input
                  className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                  type='text'
                  required
                  onChange={onChangeHandler}
                  name='city'
                  value={formData.city}
                  placeholder='City'
                />
                <input
                  className='num px-4 py-3 border border-gray-300 hover:border-black outline-none rounded-md '
                  type='number'
                  required
                  onChange={onChangeHandler}
                  name='pincode'
                  value={formData.pincode}
                  placeholder='Pincode'
                />
              </div>
              <h2 className='text-[1.25rem] pt-10 font-medium'>What's your contact information?</h2>

              <input
                className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                type='email'
                required
                onChange={onChangeHandler}
                name='email'
                value={formData.email}
                placeholder='Your Email'
              />
              <input
                className='px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                type='number'
                required
                onChange={onChangeHandler}
                name='phone'
                value={formData.phone}
                placeholder='Phone Number'
              />
            </div>
          </div>

          {/* //!Right grid */}
          <div className='flex justify-center w-full relative'>
            <div className='flex flex-col w-full sticky top-[20%]'>
              <h1 className='text-[1.75rem] text-center font-medium'>Order Summary</h1>
              <div className='sm:px-10 pt-10'>
                <CartSummary />
              </div>
              <small className='text-[10px] text-center'>
                (The total reflects the price of your order, including all duties and taxes)
              </small>
              <div className='sm:px-10 pt-5'>
                <hr className='my-5' />
                <h2 className='text-[1.75rem] pb-10 font-medium'>Payment</h2>
                <h3 className='text-[1.25rem] font-medium pb-5'>How would you like to pay?</h3>
                {/* //!Payment methods */}
                <div className='flex flex-col gap-5 pb-5'>
                  <button
                    onClick={() => setPaymentOption("razorpay")}
                    className=' flex items-center gap-4 px-4 py-3 border border-gray-300 hover:border-black outline-none rounded-md '
                  >
                    <p
                      className={`border border-gray-300 rounded-full h-[1rem] w-[1rem] ${
                        paymentOption === "razorpay" ? "bg-green-500" : ""
                      }`}
                    ></p>
                    <img src={Razorpay_logo} alt='' className='w-24 h-full  ' />
                  </button>

                  <button
                    onClick={() => setPaymentOption("stripe")}
                    className='flex items-center gap-4 px-4 py-3 border border-gray-300  hover:border-black outline-none rounded-md '
                  >
                    <p
                      className={`border border-gray-300  rounded-full h-[1rem] w-[1rem] ${
                        paymentOption === "stripe" ? "bg-green-500" : ""
                      }`}
                    ></p>
                    <img
                      src={stripe_logo}
                      alt=''
                      className='w-24 h-[20px] object-left object-contain '
                    />
                  </button>

                  <button
                    onClick={() => setPaymentOption("cod")}
                    className='flex items-center gap-4 px-4 py-3 border border-gray-300 hover:border-black outline-none rounded-md '
                  >
                    <p
                      className={`border border-gray-300  rounded-full h-[1rem] w-[1rem] ${
                        paymentOption === "cod" ? "bg-green-500" : ""
                      }`}
                    ></p>
                    Cash on Delivery
                  </button>
                </div>
                <button
                  type='submit'
                  // onClick={() => navigate("/orders")}//!We have removed this onclick for submit form
                  className={`rounded-full w-full text-white bg-black cursor-pointer py-4 ${
                    paymentOption
                      ? "bg-green-500 delay-120 transition-transform hover:translate-y-2 hover:shadow-xl"
                      : "bg-red-500"
                  }`}
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Transitions>
  );
};

export default Checkout;
