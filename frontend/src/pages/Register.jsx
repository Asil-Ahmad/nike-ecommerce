import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "ldrs/ring";
import "ldrs/square";
import Transitions from "../components/Transitions";
import Loader from "../constants/Loader";
import { nikeit42 } from "../assets/images";

const Register = () => {
  const { url } = useContext(ShopContext);
  // console.log(url);

  //   const [users, setUsers] = useState({ username: "", password: "" });
  //   const { username, password } = users; //!destructure the above usestate
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState(nikeit42);
  const [loading, setLoading] = useState(false);

  //!Fetch All user data
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${url}/api/user/list`);
      // console.log(res.data.allUser);
    } catch (error) {}
  };

  document.title = "Welcome to Nike-Sign In";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("name", name);
      formData.append("password", password);
      formData.append("image", image ? image : ""); //!better uprroach

      const res = await axios.post(`${url}/api/user/register`, formData);

      if (res.data.message) {
        setEmail("");
        setName("");
        setPassword("");
        setImage(false); //!remember to set it to false
        alert(res.data.message);
      } else {
        console.log("hello");
      }
    } catch (error) {
      //console.log(error);
      alert(error.response.data.message);
    }
    // Add a 3-second timer for the loader
    //it takes 3 second for loader to get false
    setTimeout(() => {
      setLoading(false);
    }, 100);
  };

  // useEffect(() => {
  //   fetchUsers();
  // }, []);
  return loading ? (
    <Loader />
  ) : (
    <Transitions>
      <div className='container m-auto w-full py-10 content-center sm:w-[80%] '>
        <h1 className='text-center  sm:text-4xl text-2xl tracking-wide'>
          Enter your name to join us or sign in.
        </h1>

        <form
          onSubmit={handleSubmit}
          className='flex flex-col justify-center items-center py-10 gap-5'
        >
          <input
            type='email'
            id='email'
            value={email}
            required
            noValidate
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className=' border border-black w-full lg:w-[40%] md:w-[50%] outline-none py-4 px-2 rounded-lg 
         invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
            placeholder='Your Email...'
          />
          <input
            type='text'
            id='text'
            value={name}
            required
            noValidate
            onChange={(e) => {
              setName(e.target.value);
            }}
            className=' border border-black w-full lg:w-[40%] md:w-[50%] outline-none py-4 px-2 rounded-lg 
         invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
            placeholder='Your name...'
          />
          <input
            type='password'
            id='password'
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='border border-black w-full lg:w-[40%] md:w-[50%] outline-none py-4 px-2 rounded-lg
            invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500'
            placeholder='Password...'
          />
          {/* <input
            type='file'
            name='image'
            id='image'
            accept='image/*'
            onChange={(e) => setImage(e.target.files[0])}
          /> */}
          <p className='text-gray-400 text-center sm:max-w-[20rem] max-w-full'>
            By continuing, I agree to Nike's{" "}
            <a className='underline cursor-pointer'>Privacy Policy</a> and{" "}
            <a className='underline cursor-pointer'>Terms of Use.</a>
          </p>
          <div className='flex justify-between items-center sm:w-1/3 md:w-1/2 w-full'>
            <Link to='/login' className='underline px-4 py-2 rounded-full'>
              Sign in
            </Link>
            <input
              type='submit'
              popovertarget='box'
              value='Continue'
              className='text-white bg-black px-4 py-2 rounded-full'
            />
            {/* <div
          id='box'
          popover='auto'
          className='bg-black sm:w-[25%] sm:h-[25%] w-full/ transition-all duration-300 content-center '
        >
          <p className='text-white text-2xl'>You Have Subscribed!!</p>
        </div> */}
          </div>
        </form>

        {/* <button className="px-5 py-4 border12">CLICK ME</button> */}
      </div>
    </Transitions>
  );
};

export default Register;
