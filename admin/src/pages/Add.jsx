import React, { useState } from "react";
import { add } from "../assets/icons";

const Add = () => {
  const [images, setImages] = useState([]);

  return (
    <div className='p-4 h-full  '>
      <h1 className='text-xl sm:text-left text-center'>Products / Add Products</h1>
      <form action='' className='py-10'>
        <h2 className='text-lg'>Title</h2>
        <input type='text' className='w-full rounded-md py-2 px-4 outline-none' />
        <h2 className='text-lg pt-5'>Description</h2>
        <textarea
          name=''
          id=''
          cols='30'
          rows='5'
          className='w-full rounded-md py-2 px-4 outline-none'
        ></textarea>
        <h2 className='text-lg pt-5'>Images</h2>
        <input
          onChange={(e) => setImages(Array.from(e.target.files))}
          type='file'
          id='images'
          multiple
          name='files[]'
          hidden
        />
        <label htmlFor='images'>
          <div className='flex gap-2 sm:justify-center justify-start rounded-md h-[20vh] bg-white w-full py-2 px-4 overflow-x-scroll'>
            {images.length > 0 ? (
              images.map((image, index) => (
                <img
                  key={index}
                  src={URL.createObjectURL(image)}
                  alt={`Preview ${index}`}
                  className='w-24 h-24  object-cover'
                />
              ))
            ) : (
              <img src={add} alt='Add' className='w-10 ' />
            )}
          </div>
        </label>
        <h2 className='text-lg pt-5'>Price</h2>
        <input
          type='number'
          name='number'
          id='number'
          placeholder='$'
          className='w-14 rounded-md py-2 px-2 outline-none'
        />

        <div className="pt-5">
          <p>Product Category</p>
          <select className="w-full rounded-md py-2 px-2 outline-none">
            <option value='Men'>Men</option>
            <option value='Women'>Women</option>
            <option value='Kids'>Kids</option>
          </select>
        </div>

        <div className="pt-5">
          <p>Sub Category</p>
          <select className="w-full rounded-md py-2 px-2 outline-none">
            <option value='Topwear'>Top-wear</option>
            <option value='Bottomwear'>Bottom-wear</option>
            <option value='Winterwear'>Winter-wear</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Add;
