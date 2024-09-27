import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <div className='text-center content-center h-[50vh]'>
      <h1 className='font-anton text-4xl'>Page Not Found!</h1>

      <button
        onClick={() => navigate("/")}
        className='text-white bg-black px-3 py-2 rounded-xl mt-5'
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
