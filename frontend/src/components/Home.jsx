import React, { useContext, useEffect } from "react";
import Video from "../pages/Video";
import NikeRun from "../pages/NikeRun";
import Featured from "../pages/Featured";
import Spotlights from "../pages/Spotlights";
import ShopBySports from "../pages/ShopBySports";
import LatestCollections from "../pages/LatestCollections";
import DontMiss from "../pages/DontMiss";
import { shoeVid } from "../assets/video";
import { ShopContext } from "../context/ShopContext";
import TypingEffect from "../constants/TypingEffect";

const Home = () => {
  const { featuredProducts } = useContext(ShopContext);
  // Set meta tags using JavaScript
  useEffect(() => {
    document.title = "Nike. Just Do It. Nike IN";
    // const metaDescription = document.createElement("meta");
    // metaDescription.name = "description";
    // metaDescription.content =
    //   "Shop Nike's latest collection of men's, women's, and kids' clothing and shoes. Discover comfortable and stylish apparel for all ages.";
    // document.head.appendChild(metaDescription);

    // const metaKeywords = document.createElement("meta");
    // metaKeywords.name = "keywords";
    // metaKeywords.content =
    //   "Nike, clothing, shoes, men, women, kids, sportswear, sneakers, activewear";
    // document.head.appendChild(metaKeywords);

    // // Cleanup function to remove meta tags on component unmount
    // return () => {
    //   document.head.removeChild(metaDescription);
    //   document.head.removeChild(metaKeywords);
    // };
  }, []);

  return (
    <>
      <Video video={shoeVid} />
      <NikeRun
        text1='Nike Running'
        text2={`Winning isn't comfortable`}
        text3={` If you don't hate running a little, you don't love running enough.`}
        button='Shop Running'
      />
      {/* //!---------------------FEATURED PRODUCTS---------------------------------- */}
      <div className='container  py-10'>
        <h1 className='text-left text-3xl'>Featured</h1>
        <div className=' lg:grid lg:grid-cols-3 lg:grid-rows-1 flex flex-row justify-start overflow-x-scroll  gap-4 py-5'>
          {featuredProducts.map((product, index) => (
            <Featured
              image={product.imgURL}
              title={product.title}
              index={index}
            />
          ))}
        </div>
      </div>

      <Spotlights />

      <ShopBySports />
      <LatestCollections />
      <DontMiss />
      <NikeRun
        text1='Jordan Apparel'
        text2={`Paris Saint-Germain Collection`}
        text3={`Rep the beautiful game in this statement-making collaboration between
          Jordan and France’s top soccer club.`}
        button='Shop'
      />
    </>
  );
};

export default Home;
