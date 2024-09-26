import React from "react";

const NikeRun = ({ text1, text2, text3, button }) => {
  return (
    <div className='container sm:text-center text-left py-5 '>
      <div className='flex flex-col gap-3 py-7'>
        <h1 className='text-md font-semibold'>{text1}</h1>
        <h2 className='uppercase font-anton lg:text-7xl  text-4xl'>{text2}</h2>
        <h3>{text3}</h3>
      </div>
      <button className='text-white  bg-black px-4 py-2 rounded-full'>
        {button}
      </button>
    </div>
  );
};

export default NikeRun;
