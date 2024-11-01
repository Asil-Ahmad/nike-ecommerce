import React, { useState, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { nike } from "../assets/icons";


const Preloader = () => {
  const words = ["NIKE", 1];
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen text-center content-center bg-black'>
      <AnimatePresence mode='wait'>
        {typeof words[index] === "string" ? (
          <motion.h1
            key={words[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='text-center font-anton font-display text-4xl text-gray-200  tracking-widest drop-shadow-sm'
          >
            {words[index]}
          </motion.h1>
        ) : (
          <h1>
            <motion.img
              key='nikeImage'
              src={nike}
              alt='Nike Logo'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='mx-auto w-24 h-24  invert'
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className='text-gray-200 text-xl '
            >
              Just Do It.
            </motion.p>
          </h1>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Preloader;
