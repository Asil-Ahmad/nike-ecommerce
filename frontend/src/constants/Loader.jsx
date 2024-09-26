import React from "react";
import "ldrs/ring";
import "ldrs/square";

const Loader = () => {
  return (
    <div className='container text-center content-center h-[80vh]'>
      <l-square
        size='35'
        stroke='5'
        stroke-length='0.25'
        bg-opacity='0.1'
        speed='2'
        color='black'
      ></l-square>
    </div>
  );
};

export default Loader;
