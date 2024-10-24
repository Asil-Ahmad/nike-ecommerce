import React, { useState, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { backendURL } from "../App";
import { toast } from "react-toastify";

const AdminLogin = ({ setToken }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("ask@ask.com");
  const [password, setPassword] = useState("12345678");
  const [loading, setLoading] = useState(false);

  document.title = "Admin Login";

  //!this is with try catch
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(backendURL + "/api/user/admin", { email, password });
      console.log(response.data);
      if (response.data.message) {
        const { token } = response.data;
        setToken(token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className='container m-auto py-10 h-screen content-center xl:w-[30%] lg:w-[35%] md:w-[50%] sm:w-full'>
      <h1 className='  text-3xl tracking-wide text-center'>Admin Login</h1>

      <form onSubmit={handleSubmit} className='flex flex-col m-auto  items-end py-10 gap-5'>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className='border border-black w-full required:border-blue-500  invalid:border-red-500 outline-none py-4 px-2 rounded-lg'
          placeholder='Your email...'
        />
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className='border border-black w-full  outline-none py-4 px-2 rounded-lg'
          placeholder='Password...'
        />
        <input
          type='submit'
          value='Yes'
          className='text-black mt-5 cursor-pointer  bg-white px-4 py-2 rounded-full'
        />

        {/* <input
          type='button'
          popovertarget='box'
          value='Sign in'
          className='text-white cursor-pointer  bg-black px-4 py-2 rounded-full'
        />
        <div
          id='box'
          popover='auto'
          className='bg-black sm:w-[25%] sm:h-[25%] w-full h-full p-2 text-center  content-center '
        >
          <p className='text-white text-2xl'>Are you Human??</p>
          <input
            type='submit'
            value='Yes'
            className='text-black mt-5 cursor-pointer  bg-white px-4 py-2 rounded-full'
          />
        </div> */}
      </form>
    </div>
  );
};

export default AdminLogin;
