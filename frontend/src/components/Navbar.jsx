import React, { useContext, useState, useRef } from "react";
import {
  cart,
  hamburger,
  navlinks,
  nike,
  outlineheart,
  search_icon,
  user_icon,
} from "../assets/icons";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShopContext } from "../context/ShopContext";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const { showSearch, setShowSearch, username, getCartCount, navigate } =
    useContext(ShopContext);
  // const test = useRef(null);

  const token = localStorage.getItem("token");

  // console.log(location.pathname);

  // console.log("This is user:", username);

  //animation
  // const variants = {
  //   open: { opacity: 1, x: 0 },
  //   closed: { opacity: 0, x: 100 },
  // };

  useGSAP(() => {
    gsap.from(".stage", {
      opacity: 0,
      y: 0,
      delay: 0.5,
      stagger: 0.1,
    });
    gsap.from(".profile-bg", {
      height: 0,
    });
  }, [openProfileMenu]);
  return (
    <header className='relative'>
      <div className='w-full bg-black py-3 '>
        <div className='container text-center '>
          {/* <motion.div className="bg-red-500 w-full h-full" ref={test}>
            <motion.div drag className="w-10 h-10 bg-black r" />
          </motion.div> */}
          <p className='text-white text-sm'>SIGN UP & GET 15% OFF</p>
        </div>
      </div>
      <nav className='container flex justify-between items-center '>
        <img
          src={nike}
          alt='nike logo'
          className='w-14 lg:mr-[9.5rem] cursor-pointer'
          onClick={() => navigate("/")}
        />
        <div className=' gap-10 hidden lg:flex '>
          {navlinks.map((navlink, index) => (
            <div key={index} className='group'>
              <Link
                key={index}
                to={navlink.href}
                //!below fixed the ui shifts in navlinks
                className='border-b-2 border-transparent hover:border-black'
              >
                {navlink.label}
              </Link>
              {/* //!testing hover dropdown */}
              {/* <motion.div
                className='absolute opacity-0 group-hover:opacity-100 z-30 w-full right-0 justify-center pt-4'
                initial={{ opacity: 0, height: 0 }} // Start with 0 opacity and height
                animate={{ opacity: 1, height: "30vh" }} // Animate to full height
               // Exit animation for smooth closing
                transition={{ duration: 0.4, ease: "easeInOut" }} // Smooth transition
              >
                <div className='flex flex-col gap-2 w-full h-full py-3 px-5 bg-white text-gray-500 rounded'>
                  <div className='container text-center content-center'>
                    <p className='hover:text-black cursor-pointer'>
                      My Profile
                    </p>
                    <p className='hover:text-black cursor-pointer'>Orders</p>
                    <p className='hover:text-black cursor-pointer'>Logout</p>
                  </div>
                </div>
              </motion.div> */}
            </div>
          ))}
        </div>
        <div className='flex items-center sm:gap-4 gap-3 '>
          <div
            className='lg:flex relative hidden '
            onClick={() => setShowSearch(!showSearch)}
          >
            <input
              type='search'
              className='py-1 rounded-full w-[8rem] bg-gray-100 hover:bg-gray-200 px-8 outline-none '
              placeholder='Search'
            />
            <img
              src={search_icon}
              alt='search icon'
              className='w-8 absolute h-full bg-gray-100  hover:bg-gray-300 rounded-full p-1'
            />
          </div>
          <img
            onClick={() => setShowSearch(!showSearch)}
            src={search_icon}
            alt='search icon'
            className='w-5 lg:hidden'
          />
          <img
            src={outlineheart}
            alt='outline heart'
            className='w-5 hidden lg:flex'
            // onClick={() => navigate("/register")}
          />
          <Link to='/cart' className='relative'>
            <img src={cart} alt='cart icon' className='w-5' />
            <p className='absolute bg-black rounded-full w-5 h-5 right-[-5px] top-[13px] aspect-square content-center text-center text-gray-200 text-[12px] font-bold'>
              {getCartCount()}
            </p>
          </Link>
          {/* //!here we add profile user icon who have logged in also added logout and reload the page */}
          {token ? (
            <div className='relative'>
              <p
                className=' w-6 h-full text-center rounded-full bg-black text-white cursor-pointer '
                onClick={() => {
                  setOpenProfileMenu(!openProfileMenu);
                }}
              >
                {username.slice(0, 1)}
              </p>
              {openProfileMenu ? (
                <div className=' profile-bg  absolute right-0 top-[40px] p-5 w-[13rem] h-[10rem] border border-black z-40 bg-white '>
                  <div className='w-full flex flex-col gap-5 justify-center items-center cursor-pointer'>
                    <p
                      onClick={() => {
                        navigate("/profile"),
                          setOpenProfileMenu(!openProfileMenu);
                      }}
                      className='stage hover:bg-black hover:text-white w-full text-center'
                    >
                      Profile
                    </p>
                    <p className='stage hover:bg-black hover:text-white w-full text-center'>
                      Orders
                    </p>
                    <p
                      onClick={() => {
                        localStorage.clear(), navigate("/"), location.reload();
                      }}
                      className='stage hover:bg-black hover:text-white w-full text-center'
                    >
                      Logout
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <img
              src={user_icon}
              alt='user icon'
              title='Login'
              className='w-6 cursor-pointer'
              onClick={() => navigate("/register")}
            />
          )}
          <img
            src={hamburger}
            alt='menu icon'
            onClick={() => setOpen(!open)}
            className='w-6  lg:hidden'
          />
          <div
            className={`fixed z-40 top-0 right-0 bottom-0 overflow-hidden
            transition-all duration-500
           flex flex-col gap-5 justify-center 
            items-center ${
              open
                ? "w-[100%] h-screen  bg-black dark:bg-white"
                : "w-0 h-screen"
            }`}
          >
            {navlinks.map((navlink, index) => (
              <NavLink
                key={index}
                className={({ isActive }) =>
                  `px-0.5 hover:bg-black w-full text-center hover:text-white   ${
                    isActive
                      ? "bg-black text-white py-2 font-bold"
                      : " text-black"
                  }`
                }
                onClick={() => setOpen(false)}
                to={navlink.href}
              >
                {navlink.label}
              </NavLink>
            ))}
            <NavLink
              className='bg-black w-full text-white text-center p-1'
              onClick={() => setOpen(!open)}
            >
              Back
            </NavLink>
          </div>
        </div>
      </nav>
      {/* //!Animating div */}
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // onClick={() => setVisible(false)}
            className='w-full py-2 border-b-gray-200 border text-center m-auto content-center  bg-gray-100'
          >
            <div className=''>
              <h1 className='text-center text-md font-thin'>
                New Styles On Sale: Up To 40% Off
              </h1>
              <p
                className='text-[13px] underline cursor-pointer'
                onClick={() => navigate("/collections")}
              >
                Shop All Our New Markdowns
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
