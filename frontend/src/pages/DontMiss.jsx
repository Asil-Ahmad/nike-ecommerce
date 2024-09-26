import React from "react";
import { image7 } from "../assets/images";

const DontMiss = () => {
  return (
    <div className='container pt-5'>
      <h1 className="text-left text-3xl pt-10">Don't Miss</h1>
      <div className="pt-5">
        <img src={image7} alt='dont miss' className="w-full h-[90vh] object-cover object-center" />
      </div>
    </div>
  );
};

export default DontMiss;
