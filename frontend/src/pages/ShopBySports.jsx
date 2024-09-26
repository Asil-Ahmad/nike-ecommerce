import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";
import { ShopContext } from "../context/ShopContext";

const ShopBySports = () => {
  const { shopbysports } = useContext(ShopContext);

  return (
    <div>
      <h1 className='container text-left text-3xl pt-10'>Shop By Sport</h1>
      <Swiper
        slidesPerView={3}
        grid={{
          rows: 1,
          columns: 3, // Default number of columns
        }}
        spaceBetween={30}
        modules={[Grid, Pagination]}
        className='mySwiper py-5 sm:pl-[55px] pl-[10px] overflow-x-scroll'
        breakpoints={{
          320: {
            slidesPerView: 1,
            grid: {
              rows: 1,
              columns: 1, // Set 1 column at 320px
            },
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            grid: {
              rows: 1,
              columns: 3, // Set 3 columns at 768px
            },
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            grid: {
              rows: 1,
              columns: 3, // Set 5 columns at 1024px and above
            },
            spaceBetween: 10,
          },
        }}
      >
        {shopbysports.map((item, index) => (
          <SwiperSlide className='relative' key={index}>
            <img
              src={item.imgURL}
              alt=''
              className='w-[440px] h-[300px] object-cover'
            />
            <p className='absolute bottom-10 left-10 bg-white hover:bg-gray-300 py-1 px-4 rounded-full'>
              {item.label}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ShopBySports;
