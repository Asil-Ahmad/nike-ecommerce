import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SmallLoader from "../constants/SmallLoader";
import axios from "axios";
const Orders = () => {
  const { products, token, backendURL } = useContext(ShopContext);
  const [change, setChange] = useState("Order in progress");
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);

  // ("Orders.jsx",cartItems);
  const userOrders = async () => {
    try {
      if (!token) return null;
      const response = await axios.post(
        `${backendURL}/api/order/userorders`,
        {},
        {
          headers: { token },
        }
      );
      const { orders } = response.data; //destructure the res
      orders;
      let allOrdersItems = [];
      orders.map((order) => {
        order.items.map((item) => {
          order.status;
          //This way, you have the payment information on each item, making it easier to handle the items individually,
          // but still know the status of the entire order in terms of payment.
          item["status"] = order.status;
          item["payment"] = order.payment;
          item["paymentMethod"] = order.paymentMethod;
          item["date"] = order.date;
          allOrdersItems.push(item);
        });
      });
      setOrderData(allOrdersItems.reverse());
    } catch (error) {
      error;
    }
  };

  useEffect(() => {
    userOrders();
  }, [token]);

  const trackOrder = () => {
    setLoading(true);
    userOrders();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <div className='container sm:w-3/4 w-full '>
      <h1 className='text-[1.75rem] font-medium py-10'>Orders</h1>
      <h2 className='text-[1.25rem] font-medium pb-5'>Esitmated Time of Arrival</h2>

      <div className='flex gap-4 flex-col  w-full m-auto'>
        {orderData.map((item, index) => (
          <div key={index} className='flex flex-wrap justify-between items-center'>
            {/* Render item image */}
            <div className='flex gap-2'>
              <img src={item.images[0]} alt={item.name} className='size-24' />
              <div className='flex flex-col item-center justify-center '>
                <p className=''>{item.name.slice(0, 15)}</p>
                <div className='flex gap-2 '>
                  <p className='min-w-[38px]'>${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p>
                  Date: <span className='text-gray-400'>{new Date(item.date).toDateString()}</span>
                </p>
                <p>
                  Payment: <span className='text-gray-400'>{item.paymentMethod} </span>
                </p>
              </div>
            </div>

            {/* Loading state or item change */}
            {/* {loading ? <SmallLoader /> : <p className='text-center min-w-24'>{item.status}</p>} */}
            <p className='text-center min-w-24 max-sm:mt-5 '>{item.status}</p>

            {/* Track Order Button */}
            <button
              onClick={trackOrder} // Pass orderId for tracking
              className='border border-gray-300 sm:px-2 sm:py-2 p-1 max-sm:text-sm max-sm:mt-5 rounded-md'
            >
              Track order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
