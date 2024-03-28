import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { banner1, banner2, banner3 } from "../../../Utils";
// Import Swiper styles
import "swiper/css";

export default function Banner() {
  return (
    <div className="flex justify-between items-center">
      <Swiper
        className="flex justify-between items-center"
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <a href="\">
            <img src={banner1} alt="" className="w-[100%]" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="\">
            <img src={banner2} alt="" className="w-[100%]" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="\">
            <img src={banner3} alt="" className="w-[100%]" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
