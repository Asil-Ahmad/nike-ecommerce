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

const Spotlights = () => {
  const { spotlights, products } = useContext(ShopContext);
  const navigate = useNavigate();
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <h1 className='container text-left text-3xl pt-5'>Classic Spotlight</h1>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={5}
        loop={true}
        centeredSlides={true}
        spaceBetween={10}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper py-10'
        breakpoints={{
          320: {
            slidesPerView: 2, // When viewport width is >= 320px, show 2 slides
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3, // When viewport width is >= 768px, show 3 slides
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5, // When viewport width is >= 1024px, show 5 slides
            spaceBetween: 30,
          },
        }}
      >
        {products
          .filter((item) => item.subCategory === "Shoes")
          .slice(0, 10)
          .map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`/products/${item._id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className='cursor-pointer'
                />
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Spotlights;
