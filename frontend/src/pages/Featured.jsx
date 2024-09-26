import React from "react";
const Featured = ({ image, index, title }) => {
  return (
    <div key={index} className='flex flex-col gap-4 justify-start'>
      <img
        src={image}
        alt={title}
        className='cursor-pointer h-full object-cover object-center lg:max-w-full'
      />
      <p className='text-xl'>{title}</p>
    </div>
  );
};

export default Featured;
