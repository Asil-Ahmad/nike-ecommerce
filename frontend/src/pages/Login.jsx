import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import Transitions from "../components/Transitions";
import Loader from "../constants/Loader";
import { toast } from "react-toastify";

const Login = () => {
  const { url, user, setToken, navigate, backendURL } = useContext(ShopContext);

  // useEffect(() => {
  //   (user);
  // });

  //   const [users, setUsers] = useState({ username: "", password: "" });
  //   const { username, password } = users; //!destructure the above usestate
  const [email, setEmail] = useState("ask@ask.com");
  const [password, setPassword] = useState("12345678");
  const [loading, setLoading] = useState(false);

  //!Fetch All user data
  // const fetchUsers = async () => {
  //   try {
  //     const res = await axios.get(`${url}/api/user/login`);
  //     ("Fetch users", res.data);
  //   } catch (error) {}
  // };
  document.title = "Login";

  //!this is with try catch
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${backendURL}/api/user/login`, {
        email: email,
        password: password,
      });

      const { data } = res; //!EXTRACT DATA FROM RES

      if (data && data.token) {
        setToken(data.token);
        // const decodedToken = jwtDecode(data.token); //!this convert the token into string using jwtDecode
        localStorage.setItem("token", data.token); //!we set token inside local storage
        localStorage.setItem("username", data.name); //!we get token name

        navigate("/");
      } else {
        throw new Error("Token not found in response");
      }
    } catch (err) {
      toast.error("User does not exist or wrong input");
    }
  };

  // useEffect(() => {
  //   fetchUsers();
  // });
  return loading ? (
    <Loader />
  ) : (
    <Transitions>
      <div className='container m-auto h-full py-10 content-center xl:w-[30%] lg:w-[35%] md:w-[50%] sm:w-full'>
        <h1 className='  text-3xl tracking-wide'>Enter your name to join us or sign in.</h1>

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

          <div className='flex justify-between w-full'>
            <input
              type='button'
              onClick={() => navigate("/admin")}
              value='Admin Login'
              className='text-white cursor-pointer  bg-black px-4 py-2 rounded-full'
            />
            <input
              type='button'
              popovertarget='box'
              value='Sign in'
              className='text-white cursor-pointer  bg-black px-4 py-2 rounded-full'
            />
          </div>
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
          </div>
        </form>
      </div>
    </Transitions>
  );
};

export default Login;
