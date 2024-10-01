import React, { useContext, useState } from "react";

import Transitions from "./Transitions";
import { women } from "../assets/video";
import Video from "../pages/Video";
import NikeRun from "../pages/NikeRun";
import Loader from "../constants/Loader";
import { ShopContext } from "../context/ShopContext";
import Featured from "../pages/Featured";
import { useNavigate } from "react-router-dom";

const WomenCollections = () => {
  document.title = "Women's Collections";
  const navigate = useNavigate();
  const { featuredWomenProducts } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  return loading ? (
    <Loader />
  ) : (
    <Transitions>
      <div className='bg-white sticky top-0 z-20  '>
        <div className='container flex sm:justify-between sm:flex-row flex-col py-6  '>
          <h1 className='text-xl max-w-[38px] '>Women</h1>
          <div className='flex-1 flex sm:justify-center justify-start gap-5 pt-5 sm:pt-0 '>
            <h1 className=' hover:text-gray-400 cursor-pointer'>Shoes</h1>
            <h1
              className=' hover:text-gray-400 cursor-pointer'
              onClick={() => navigate("/collections")}
            >
              Clothing
            </h1>
            <h1 className=' hover:text-gray-400 cursor-pointer'>Gear</h1>
          </div>
        </div>
      </div>

      <Video video={women} />
      <NikeRun
        text1='Nike Pegasus 41'
        text2={`Don’t Waste Your Energy`}
        text3={`Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new ReactX foam.`}
        button='Shop'
      />
      <div className='container  py-10'>
        <h1 className='text-left text-2xl'>New & Featured</h1>
        <div className='grid grid-cols-3 py-5 overflow-x-scroll scrollbar-hide'>
          <div className='flex gap-4'>
            {featuredWomenProducts.map((product, index) => (
              <div
                key={index}
                className='sm:min-w-[415px] sm:max-w-[580px] min-w-[300px] max-w-[423px]'
              >
                <Featured image={product.imgURL} title={product.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Transitions>
  );
};

export default WomenCollections;
