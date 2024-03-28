import React from "react";
import "../ListProduct/ListItem.css";
import FooterGallery from "../../Layouts/Sections/Footer/FooterGallery";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// Swiper.use([Navigation, Pagination, Scrollbar]);

export default function ListItem() {
  // const navigationPrevRef = React.useRef(null);
  // const navigationNextRef = React.useRef(null);

  return (
    <div className="bg-[#f8f9fa]">
      <div className="w-full max-w-[1200px] px-[12px] mx-auto ">
        <ol className="breadcrumb py-[6px] px-0 flex list-none mb-[8px]">
          <li className="breadcrumb-item h-5 text-[#444b52] text-[14px] leading-5">
            <a href="/" className="text-[#0664f9] relative inline-block">
              Trang chủ
            </a>
          </li>
          <li className="breadcrumb-item2  h-5 text-[#444b52] text-[14px] leading-5">
            Iphone
          </li>
        </ol>

        <h1 className="h1 text-center text-4xl leading-9 font-medium mb-8">
          iPhone
        </h1>

        <main className="rounded-[6px] bg-[#ffffff] shadow-[0_1px_4px_rgba(10,10,10,.15)] block">
          <div>
            <div className="action pt-[24px] pb-[8px] px-[24px]">
              <div className="mb-[24px] py-[4px] px-[72px] rounded-md bg-[#f8f9fa] shadow-[inset_0_2px_4px_rgba(4,4,4,.15)] relative">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={20}
                  slidesPerView={6}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                >
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      Tất cả
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 15 Pro Max
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 15 Pro
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 15 Plus
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 15
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 14 Pro Max
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 14 Pro
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 14 Plus
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 14
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 13
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 12
                    </a>
                  </SwiperSlide>
                  <SwiperSlide>
                    <a
                      href=""
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 11
                    </a>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>

            <div className="tab-pane">
              <div className="product-list flex bg-[#fff] flex-wrap relative">
                <div className="product-item h-[534px] bg-[#fff] rounded-none pt-[24px] pb-[32px] px-[12px] flex flex-col basis-[calc(100%/3)] border-[1px] border-[#edeeef] border-t-0 border-b-0">
                  <div className="product-item-img h-[240px] px-[30px] mb-[16px] relative text-center ">
                    <a href="" className="block w-full">
                      <img
                        className=" w-[307px] h-[240px] object-contain transition-[all_.3s_ease]"
                        src={require("../../assets/images/List/Items/Iphone/Ip15pr_Ip15prm.webp")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-item-info flex flex-col gap-[8px]">
                    display: flex; justify-content: center; gap: 12px;
                    margin-bottom: 16px;
                    <div className="product-color flex"></div>
                    <a href="">
                      <h3></h3>
                    </a>
                    <div className="product-memory"></div>
                    <div className="product-price"></div>
                  </div>
                  <div className="product-item-detail flex flex-[1] mt-4 justify-center items-start ">
                    <a
                      href="\"
                      className="w-[176px] text-[#6a737a] border border-[#cbd1d6] bg-[#ffffff] h-[32px] px-[12px] text-[16px] leading-4 inline-flex items-center justify-center flex-col select-none transition-[all_.3s_cubic-bezier(0,0,.4,1)] pointer"
                    >
                      XEM CHI TIẾT
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <section className="footer__gallery bg-[#f8f9fa] text-white pb-[38px]">
        <FooterGallery />
      </section>
    </div>
  );
}
