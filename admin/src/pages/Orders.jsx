import React, { useState, useEffect } from "react";
import { backendURL } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
import { info, parcel } from "../assets/icons";

const Orders = ({ token }) => {
  const [orderList, setOrderList] = useState([]);
  const [image, setImage] = useState([]);

  const fetchOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(backendURL + "/api/order/list", {}, { headers: { token } });
      console.log(response.data);

      const { orders, success } = response.data; //extracted orders

      if (response.data.success) {
        setOrderList(orders);
        console.log(orderList);
      } else {
        toast.error(success);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const orderUpdateStatus = async (e, orderId) => {
    try {
      const response = await axios.post(
        backendURL + "/api/order/status",
        { orderId, status: e.target.value },
        { headers: { token } }
      );
      if (response.data.success) {
        await fetchOrders();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);
  return (
    <div className='p-4 h-full'>
      <h1 className='text-xl sm:text-left text-center'>Orders</h1>
      <div>
        {orderList.map((order, index) => (
          <div
            key={index}
            className='grid grid-cols-4 grid-rows-1 mt-5 gap-10 py-3 px-5 border-2 border-gray-400 items-center'
          >
            <div className="flex items-center w-full justify-center">

            <img src={parcel} alt='orders' className='w-10 h-10' />
            </div>
            <div>
              {order.items.map((item, index) => {
                if (order.items.length > 0) {
                  return (
                    <p key={index}>
                      {item.name} x {item.quantity}
                    </p>
                  );
                }
              })}
            </div>
            <div>
              <p>Name: {order.address.firstName + " " + order.address.lastName}</p>
              <p>
                Address:{" "}
                {order.address.street + ", " + order.address.city + " ," + order.address.pincode}
              </p>
              <p>Phone: {order.address.phone}</p>

              <p>{new Date(order.date).toLocaleDateString()}</p>
            </div>
            <select onChange={(e) => orderUpdateStatus(e, order._id)} value={order.status}>
              <option value='Order Placed'>Order Placed</option>
              <option value='Packing'>Packing</option>
              <option value='Shipping'>Shipping</option>
              <option value='Out for delivery'>Out for delivery</option>
              <option value='Delivered'>Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
