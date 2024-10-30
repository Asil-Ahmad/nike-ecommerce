import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SmallLoader from "../constants/SmallLoader";

const Orders = () => {
  const { products,cartItems } = useContext(ShopContext);
  const [change, setChange] = useState("Order in progress");
  const [loading, setLoading] = useState(false);

  console.log("Orders.jsx",cartItems);
  
  const trackOrder = () => {
    setLoading(true);
    if (change) {
      setChange("Arriving Soon");
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className='container'>
      <h1 className='text-[1.75rem] font-medium py-10'>Orders</h1>
      <h2 className='text-[1.25rem] font-medium pb-5'>Esitmated Time of Arrival</h2>

      <div className='flex gap-4 flex-col sm:w-3/4 w-full m-auto'>
        {products.slice(0, 4).map((product, index) => (
          <div key={index} className='flex justify-between items-center'>
            <img src={product.images[0]} alt='' className='size-24' />
            {loading ? (
              <SmallLoader />
            ) : (
              <p className='text-center min-w-24'>
                {change}
              </p>
            )}
            <button
              onClick={trackOrder}
              className='border border-gray-300 sm:px-2 sm:py-2 max-sm:text-sm  rounded-md'
            >
              Track
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
