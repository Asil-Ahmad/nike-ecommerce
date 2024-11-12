import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import SmallLoader from "../constants/SmallLoader";
import axios from "axios";
const Orders = () => {
  const { products, token, backendURL } = useContext(ShopContext);
  const [change, setChange] = useState("Order in progress");
  const [loading, setLoading] = useState(false);
  const [orderData, setOrderData] = useState([]);

  // console.log("Orders.jsx",cartItems);
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
      console.log(orders);
      let allOrdersItems = [];
      orders.map((order) => {
        order.items.map((item) => {
          console.log(order.status);
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
      console.log(error);
    }
  };

  useEffect(() => {
    userOrders();
  }, [token]);

  const trackOrder = () => {
    setLoading(true);
    if (change) {
      setChange("Arriving Soon");
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  // const trackOrder = () => {
  //   setLoading(true);
  //   if (change) {
  //     setChange("Arriving Soon");
  //   }
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // };
  return (
    <div className='container'>
      <h1 className='text-[1.75rem] font-medium py-10'>Orders</h1>
      <h2 className='text-[1.25rem] font-medium pb-5'>Esitmated Time of Arrival</h2>

      <div className='flex gap-4 flex-col text-sm  w-full m-auto'>
        {orderData.map((item, index) => (
          <div key={index} className='flex justify-between items-center'>
            {/* Render item image */}
            <div className='flex gap-2'>
              <img src={item.images[0]} alt={item.name} className='size-24' />
              <div className='flex flex-col justify-center'>
                <p>{item.name}</p>
                <div className='flex gap-5 '>
                  <p>${item.price}</p>
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
            {loading ? <SmallLoader /> : <p className='text-center min-w-24'>{item.status}</p>}

            {/* Track Order Button */}
            <button
              onClick={trackOrder} // Pass orderId for tracking
              className='border border-gray-300 sm:px-2 sm:py-2 max-sm:text-sm rounded-md'
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
