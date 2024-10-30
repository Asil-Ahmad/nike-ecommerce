import React, { useContext, useState } from "react";
import Transitions from "./Transitions";
import Video from "../pages/Video";
import { men } from "../assets/video";
import NikeRun from "../pages/NikeRun";
import Loader from "../constants/Loader";
import { ShopContext } from "../context/ShopContext";
import Featured from "../pages/Featured";
import LatestCollections from "../pages/LatestCollections";
import ShopBySports from "../pages/ShopBySports";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MenCollections = () => {
  document.title = "Men's Collections";
  const navigate = useNavigate();
  const { menFeaturedProducts, products } = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [menProducts, setMenProducts] = useState([]);

  const menLatestCollections = () => {
    let filterCopy = products;
    console.log(filterCopy);

    filterCopy = filterCopy.filter((item) => item.menBestSeller === true);
    setMenProducts(filterCopy);
    console.log(menProducts);
  };

  useEffect(() => {
    menLatestCollections();
  }, [products]);

  return loading ? (
    <Loader />
  ) : (
    <Transitions>
      {/* //!------------------MEN NAVBAR-------------------- */}
      <div className='bg-white sticky top-0 z-20  '>
        <div className='container flex sm:justify-between sm:flex-row flex-col   py-6  '>
          <h1 className='text-xl max-w-[60px] '>Men</h1>
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

      <Video video={men} />
      <NikeRun
        text1='Nike Pegasus 41'
        text2={`Don’t Waste Your Energy`}
        text3={`Run in Pegasus. Feel the responsive energy return of Air Zoom and all-new ReactX foam.`}
        button='Shop'
      />
      {/* //!---------------------FEATURED PRODUCTS---------------------------------- */}
      <div className='container  py-10'>
        <h1 className='text-left text-2xl'>New & Featured</h1>
        <div className='grid grid-cols-3 py-5 overflow-x-scroll scrollbar-hide'>
          <div className='flex gap-4'>
            {menFeaturedProducts.map((product, index) => (
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

      {/* //!----------------------LASTEST PRODUCTS------------------- */}
      <div className='container  py-10'>
        <h1 className='text-left text-2xl'>Men BestSellers</h1>
        <div className='grid grid-cols-3 py-5 overflow-x-scroll scrollbar-hide'>
          <div className='flex gap-4'>
            {menProducts.map((product, index) => (
              <div
                key={index}
                className='sm:min-w-[415px] sm:max-w-[580px] min-w-[300px] max-w-[423px]'
              >
              
                <Featured image={product.images[0]} title={product.name} id={product._id} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ShopBySports />
    </Transitions>
  );
};

export default MenCollections;
