import React, { useState } from "react";
import { add } from "../assets/icons";
import axios from "axios";
import { backendURL } from "../App";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const Add = ({ token }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [sizes, setSizes] = useState([]);
  const [bestseller, setBestseller] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      images.forEach((image, index) => {
        formData.append("images", image); // 'images' is the field name expected by the backend
      });
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("sizes", JSON.stringify(sizes));
      formData.append("bestseller", bestseller);
      const response = await axios.post(backendURL + "/api/product/add-products", formData, {
        headers: { token },
      });

      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setImages([]);
        setPrice("");
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error("An error occured");
      }
      console.log(response.data);
    } catch (error) {
      toast.error("Invalid Admin");
    } finally {
      setLoading(false); // Automatically stops loading after the request completes (success or error)
    }
  };

  return loading ? (
    <Loader />
  ) : (
    <div className='p-4 h-full  '>
      <h1 className='text-xl sm:text-left text-center'>Products / Add Products</h1>
      <form onSubmit={onSubmitHandler} className='py-10'>
        <h2 className='text-lg'>Title</h2>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='w-full text-xl font-semibold capitalize rounded-md py-2 px-4 outline-none'
        />
        <h2 className='text-lg pt-5'>Description</h2>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='w-full rounded-md py-2 px-4 outline-none'
        />
        {/* //!--------------------------Images------------------------------ */}
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
          {/* //!--------------------------Images Preview------------------------------ */}
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
        <div className='flex justify-between items-center flex-wrap lg:w-[75%]'>
          <div>
            <h2 className=' pt-5'>Price</h2>
            <input
              type='number'
              placeholder='$'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className='w-full rounded-md py-2 px-2 outline-none'
            />
          </div>

          <div className='pt-5'>
            <p>Product Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className='w-full rounded-md py-2 px-2 outline-none'
            >
              <option value='Men'>Men</option>
              <option value='Women'>Women</option>
              <option value='Kids'>Kids</option>
            </select>
          </div>

          <div className='pt-5'>
            <p>Sub Category</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className='w-full rounded-md py-2 px-2 outline-none'
            >
              <option value='Topwear'>Top-wear</option>
              <option value='Bottomwear'>Bottom-wear</option>
              <option value='Winterwear'>Winter-wear</option>
            </select>
          </div>
        </div>
        {/* //!THIS SIZES WE CAN SELECT MULTIPLE SIZES ---------------------IMPORTANT PART */}
        <div className='pt-5'>
          <p className=''>Sizes</p>
          <div className='flex gap-6 flex-wrap'>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("S") ? prev.filter((item) => item !== "S") : [...prev, "S"]
                )
              }
            >
              <p
                className={` ${
                  sizes.includes("S") ? "bg-black text-white" : "bg-slate-200"
                } rounded-md px-3 py-1 cursor-pointer`}
              >
                S
              </p>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("M") ? prev.filter((item) => item !== "M") : [...prev, "M"]
                )
              }
            >
              <p
                className={` ${
                  sizes.includes("M") ? "bg-black text-white" : "bg-slate-200"
                } rounded-md px-3 py-1 cursor-pointer`}
              >
                M
              </p>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("L") ? prev.filter((item) => item !== "L") : [...prev, "L"]
                )
              }
            >
              <p
                className={` ${
                  sizes.includes("L") ? "bg-black text-white" : "bg-slate-200"
                } rounded-md px-3 py-1 cursor-pointer`}
              >
                L
              </p>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XL") ? prev.filter((item) => item !== "XL") : [...prev, "XL"]
                )
              }
            >
              <p
                className={` ${
                  sizes.includes("XL") ? "bg-black text-white" : "bg-slate-200"
                } rounded-md px-3 py-1 cursor-pointer`}
              >
                XL
              </p>
            </div>
            <div
              onClick={() =>
                setSizes((prev) =>
                  prev.includes("XXL") ? prev.filter((item) => item !== "XXL") : [...prev, "XXL"]
                )
              }
            >
              <p
                className={` ${
                  sizes.includes("XXL") ? "bg-black text-white" : "bg-slate-200"
                } rounded-md px-3 py-1 cursor-pointer`}
              >
                XXL
              </p>
            </div>
          </div>
        </div>

        <div className='pt-5 flex gap-2 items-center'>
          <input
            onChange={() => setBestseller((prev) => !prev)}
            checked={bestseller}
            type='checkbox'
            id='bestseller'
            className='accent-black '
          />
          <label className='cursor-pointer' htmlFor='bestseller'>
            Add to bestseller
          </label>
        </div>
        <button
          className='mt-5 py-2 rounded-md w-full text-center bg-black text-white'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
