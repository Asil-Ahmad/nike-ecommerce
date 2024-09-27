import React, { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nikeit42, nikeit49 } from "../assets/images";
gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

const Profile = () => {
  const scrollRef = useRef();
  useGSAP(() => {
    gsap.fromTo(
      ".gridbox",
      {
        opacity: 0,
        y: 0,
      },
      {
        opacity: 1,
        y: 0,
        delay: 1.2,
        stagger: 0.2,
        // scrollTrigger: {
        //   trigger: ".gridbox",
        //   markers: true,
        //   start: "top 40%",
        //   scrub: 1,
        // },
      }
    );
  });
  return (
    <section id='home' className='container'>
      <div ref={scrollRef} className=' flex gap-4 pt-10 pb-5 '>
        {/*//! Profile grid-------------------------------- */}
        <div className=' gridbox w-full h-full border-black border rounded-3xl p-10 flex items-start gap-4'>
          <img
            src={nikeit42}
            alt=''
            className=' aspect-square size-24 rounded-lg'
          />
          <div>
            <h1 className='text-2xl text-black'>User Name</h1>
            <p>Address</p>
          </div>
        </div>

        {/*//! Liked grid---------------------------------- */}
        <div className='gridbox border border-black bg-white w-full h-full rounded-3xl'>
          <div className='bg-gray-400/20 text-black p-4 rounded-t-3xl flex items-center gap-2'>
            <h1 className='text-black font-semibold'>Liked Products</h1>
          </div>
          <div className='p-2'>
            <img src={nikeit49} alt='' className='size-32 rounded-3xl' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
