import React from "react";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { EffectFade, EffectFlip } from "swiper/modules";
import "swiper/css/effect-fade";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  iconBox,
  iconitem,
  iconcrown,
  iconshield,
  iconlike,
} from "../../../Utils";
export default function FooterGallery() {
  return (
    <div className="footer__gallery-inner">
      <div className="section__gallery-title mb-[24px]">
        <p className="font-[500] text-[24px] leading-[32px] text-[#f8f9fa] text-center">
          Hình ảnh hệ thống F.Studio
        </p>
      </div>
      <div className="footer__gallery-main">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={3}
          navigation
          EffectFlip
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img src={Gallery1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Gallery5} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
