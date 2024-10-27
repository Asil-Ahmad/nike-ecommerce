import React, { useState, useEffect } from "react";
import { backendURL } from "../App";
import axios from "axios";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(backendURL + "/api/product/list-products");
      //   console.log(response.data);

      const { products, message } = response.data; //extracted products

      if (response.data.success) {
        setList(products);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const removeProducts = async (id) => {
    try {
      const response = await axios.post(
        backendURL + "/api/product/remove",
        { id },
        {
          headers: { token },
        }
      );
      console.log(response);

      if (response.data) {
        toast.success(response.data.message);
        await fetchProducts();
      } else {
        toast.error("hi");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className='relative overflow-x-auto shadow-md '>
      <table className='w-full text-sm text-left rtl:text-right text-black'>
        <thead className='text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr className="text-center">
            <th scope='col' className='px-6 py-3'>
              Image
            </th>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Category
            </th>
            <th scope='col' className='px-6 py-3'>
              Price
            </th>
            <th scope='col' className='px-6 py-3'>
              Action
            </th>
          </tr>
        </thead>
        {list.map((item, index) => (
          <tbody key={index}>
            <tr className=' bg-gray-100 border-b text-center dark:border-gray-700'>
              <th
                scope='row'
                className='px-6 py-4 flex justify-center'
              >
                <img src={item.images[0]} alt='' className='w-10' />
              </th>
              <td className='px-6 py-4'>{item.name}</td>
              <td className='px-6 py-4'>{item.category}</td>
              <td className='px-6 py-4'>$ {item.price}</td>
              <td className='px-6 py-4'>
                <button
                  onClick={() => removeProducts(item._id)}
                  className='font-medium bg-red-500 hover:bg-red-600 px-2 py-1 rounded-md text-white cursor-pointer'
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default List;
