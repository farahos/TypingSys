import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Import images

import typing1 from "../assets/typing1.jpg"
import typing2 from "../assets/typing2.jpg"
import typing3 from "../assets/typing3.jpg"

const TypingCarousel = () => {
  return (
    
    <div className="w-full max-w-4xl mx-auto mt-10 rounded-xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-64"
      >
        <SwiperSlide>
          <img src={typing1} alt="Typing Image 1" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={typing2} alt="Typing Image 2" className="w-full h-full object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={typing3} alt="Typing Image 3" className="w-full h-full object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TypingCarousel;
