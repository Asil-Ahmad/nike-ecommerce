import React, { useState } from "react";
import { back, hamburger, list, navlinks } from "../assets/icons";
import { NavLink } from "react-router-dom";
import { nike } from "../assets/images";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='sm:w-[20%]  sm:flex hidden sticky top-0 justify-between flex-col bg-black h-screen'>
        <div>
          <div className='flex justify-center gap-5 items-center invert'>
            <img src={nike} alt='' className='w-20' />
          </div>
          <div className='flex text-white flex-col container gap-5 py-10 '>
            {navlinks.map(({ href, label, imgURL }, index) => (
              <NavLink
                className='text-[1em] hover:font-semibold transition-all duration-150 flex gap-2'
                to={href}
                key={index}
              >
                <img src={imgURL} alt='' className='w-5 invert' />
                {label}
              </NavLink>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("token"), location.reload();
          }}
          className='bg-red-500 text-black '
        >
          Logout
        </button>
      </div>
      <img
        onClick={() => setOpen(!open)}
        src={hamburger}
        alt=''
        className='w-8 block sm:hidden  top-0 fixed h-screen  bg-black '
      />

      <div
        className={`fixed z-40 top-0 left-0 bottom-0 overflow-hidden
            transition-all duration-200 bg-black h-screen ease-in-out
           flex flex-col 
            items-center ${open ? "w-[100%]  " : "w-0"}`}
      >
        <img src={nike} alt='' className='w-20 invert ' />
        <div className='flex flex-col w-full h-full gap-4 justify-center items-start px-2 '>
          <button
            className=' bg-gray-100 rounded-full p-1'
            onClick={() => setOpen(!open)}
          >
            <img src={back} alt='back button' className='w-5  ' />
          </button>
          {navlinks.map((navlink, index) => (
            <NavLink
              key={index}
              className='text-center text-white w-full text-[1.25em] flex gap-2 justify-start items-center'
              onClick={() => setOpen(false)}
              to={navlink.href}
            >
              <img src={navlink.imgURL} alt='' className='w-5 invert' />
              {navlink.label}
            </NavLink>
          ))}

          <button
            onClick={() => {
              localStorage.removeItem("token"), location.reload();
            }}
            className='bg-red-500 w-full text-black p-1 '
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
