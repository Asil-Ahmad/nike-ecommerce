import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SmallLoader from "../constants/SmallLoader";

const Orders = () => {
  const { products } = useContext(ShopContext);
  const [change, setChange] = useState("Order in progress");
  const [loading, setLoading] = useState(false);

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

      <div className='flex gap-4 flex-col w-3/4 m-auto'>
        {products.slice(0, 4).map((product, index) => (
          <div key={index} className='flex justify-between items-center'>
            <img src={product.image} alt='' className='size-24' />
            {loading ? (
              <SmallLoader />
            ) : (
              <p className='text-center min-w-24'>
                {change}
              </p>
            )}
            <button
              onClick={trackOrder}
              className='border border-gray-300 px-2 py-2 rounded-md'
            >
              Track Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
