import React from "react";
import { Link } from "react-router-dom";
const Featured = ({ image, index, title, id }) => {
  return (
    <Link to={`/products/${id}`}>
      <div key={index} className='flex flex-col gap-4 justify-start'>
        <img
          src={image}
          alt={title}
          className='cursor-pointer h-full object-cover object-center lg:max-w-full sm:min-w-[415px] 
        sm:max-w-[580px] min-w-[300px] max-w-[423px]'
        />
        <p className='text-xl'>{title}</p>
      </div>
    </Link>
  );
};

export default Featured;
