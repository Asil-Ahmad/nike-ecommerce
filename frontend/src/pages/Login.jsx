import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Transitions from "../components/Transitions";
import Loader from "../constants/Loader";

const Login = () => {
  const { url, user, setUser } = useContext(ShopContext);
  const navigate = useNavigate();
  console.log("username", user?.data?.user.name);

  //   const [users, setUsers] = useState({ username: "", password: "" });
  //   const { username, password } = users; //!destructure the above usestate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  //!Fetch All user data
  // const fetchUsers = async () => {
  //   try {
  //     const res = await axios.get(`${url}/api/user/login`);
  //     console.log("Fetch users", res.data);
  //   } catch (error) {}
  // };
  document.title = "Login";

  //!not register form change this
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);

    const res = await axios
      .post(`${url}/api/user/login`, {
        email: email,
        password: password,
      })
      .then((data) => {
        // navigate("/profile");
        console.log(data);
        setUser(data);
        navigate("/");
      })
      .catch((err) => alert("User not exist or wrong input"));
  };

  // useEffect(() => {
  //   fetchUsers();
  // });
  return loading ? (
    <Loader />
  ) : (
    <Transitions>
      <div className='container m-auto py-10 content-center xl:w-[30%] lg:w-[35%] md:w-[50%] sm:w-full'>
        <h1 className='  text-3xl tracking-wide'>
          Enter your name to join us or sign in.
        </h1>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col m-auto  items-end py-10 gap-5'
        >
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
            popovertarget='box'
            value='Sign in'
            className='text-white  bg-black px-4 py-2 rounded-full'
          />
          {/* <div
          id='box'
          popover='auto'
          className='bg-black sm:w-[25%] sm:h-[25%] w-full/ transition-all duration-300 content-center '
        >
          <p className='text-white text-2xl'>You Have Subscribed!!</p>
        </div> */}
        </form>
      </div>
    </Transitions>
  );
};

export default Login;
