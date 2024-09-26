import React, { useContext, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { ShopContext } from "../context/ShopContext";
import { Link, useNavigate } from "react-router-dom";

const LatestCollections = () => {
  const { latest, products } = useContext(ShopContext);
  const navigate = useNavigate();
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <h1 className='container text-left text-3xl pt-10'>Latest Collections</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper py-10 overflow-x-scroll pl-5'
        breakpoints={{
          320: {
            slidesPerView: 1, // When viewport width is >= 320px, show 2 slides
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2, // When viewport width is >= 768px, show 3 slides
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3, // When viewport width is >= 1024px, show 5 slides
            spaceBetween: 30,
          },
        }}
      >
        {products
          .filter((item) => item.bestsellerinmen === true)
          .map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`/products/${item._id}`}>
                <img src={item.image} alt='' className='cursor-pointer' />
                <p className='pt-3'>{item.name}</p>
                <p className='text-gray-400'>
                  {item.category}&nbsp;{item.subCategory}
                </p>
                <p className='pt-2'>${item.price}</p>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default LatestCollections;
