import React, { useState } from "react";
import { add } from "../assets/icons";

const AddProducts = () => {
  const [images, setImages] = useState([]);

  return (
    <div className='container'>
      <h1 className='text-4xl text-center'>Add Products</h1>
      <form action=''>
        <h2>Insert Images of the Products</h2>

        <input
          onChange={(e) => setImages(Array.from(e.target.files))}
          type='file'
          id='images'
          multiple
          name='files[]'
          hidden
        />
        <label htmlFor='images'>
          <div className='flex gap-2'>
            {images.length > 0 ? (
              images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  className='w-10 h-10 object-cover'
                />
              ))
            ) : (
              <img src={add} alt='Add' className='w-10' />
            )}
          </div>
        </label>
      </form>
    </div>
  );
};

export default AddProducts;
