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

  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const [value, setValue] = React.useState("react");

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
              <div className="content flex justify-end items-center gap-2">
                <div className="text text-sm leading-5 font-normal text-[#444b52]">Sắp xếp theo:</div>
                <select id="Filter" className="outline-[#cbd1d6] border focus:border-[#cbd1d6] rounded border-[#cbd1d6] min-w-[124px] w-auto py-1 pl-3 pr-8 cursor-pointer text-[#444b52] bg-[#ffffff] font-normal inline-flex items-center relative justify-between transition-[all_.3s_cubic-bezier(0,0,.4,1)]">
  <option disabled selected hidden>Choose ...</option>
  <option value="LtH">Giá thấp đến cao</option>
  <option value="HtL">Giá cao đến thấp</option>
</select>

  </div>
            </div>

            <div className="tab-pane">
              <div className="product-list flex bg-[#fff] flex-wrap relative">
              
                <div className="product-item h-[534px] bg-[#fff] rounded-none pt-[24px] pb-[32px] px-[12px] flex flex-col basis-[calc(100%/3)] border-[1px] border-[#edeeef] border-t-0 border-l-0">
                  <div className="product-item-img h-[240px] px-[30px] mb-[16px] relative text-center ">
                    <a href="" className="block w-full">
                      <img
                        className=" w-[307px] h-[240px] object-contain transition-[all_.3s_ease]"
                        src={require("../../assets/images/List/Items/Iphone/Ip15pr_Ip15prm.webp")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-item-info flex flex-col items-center gap-[8px]">
                   
                    <div className="product-color flex gap-3 mb-4 justify-center ">
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#484A4B]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#F3F2ED]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#4C5363]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#BBB5A9]"></span>
                    </div>
                    <a href="/">
                      <h3 className="product_name text-[20px] leading-[28px] font-medium text-center overflow-hidden text-[#32373d] ">Iphone 15 Pro Max</h3>
                    </a>
                    <div className="product-memory w-[276px] m-[0_auto] flex rounded bg-[#edeeef] js...">
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out] bg-[#444b52] text-[#fff]">256GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">512GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">1TB</div>
                    </div>
                    <div className="product-price flex gap-2 items-end justify-center m-0">
                      <div className="text text-[16px] font-normal leading-[24px] text-[#444b52]">Giá chỉ</div>
                      <div className="price text-[20px] leading-7 font-medium text-[#cb1c22]">30.690.000đ</div>
                      <strike className="oldPrice text-[#939ca3] text-[16px] leading-6 font-normal">34.990.000đ</strike>
                    </div>
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
                <div className="product-item h-[534px] bg-[#fff] rounded-none pt-[24px] pb-[32px] px-[12px] flex flex-col basis-[calc(100%/3)] border-[1px] border-[#edeeef] border-t-0 border-l-0">
                  <div className="product-item-img h-[240px] px-[30px] mb-[16px] relative text-center ">
                    <a href="" className="block w-full">
                      <img
                        className=" w-[307px] h-[240px] object-contain transition-[all_.3s_ease]"
                        src={require("../../assets/images/List/Items/Iphone/Ip15pr_Ip15prm.webp")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-item-info flex flex-col items-center gap-[8px]">
                   
                    <div className="product-color flex gap-3 mb-4 justify-center ">
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#484A4B]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#F3F2ED]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#4C5363]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#BBB5A9]"></span>
                    </div>
                    <a href="/">
                      <h3 className="product_name text-[20px] leading-[28px] font-medium text-center overflow-hidden text-[#32373d] ">Iphone 15 Pro Max</h3>
                    </a>
                    <div className="product-memory w-[276px] m-[0_auto] flex rounded bg-[#edeeef] js...">
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out] bg-[#444b52] text-[#fff]">256GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">512GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">1TB</div>
                    </div>
                    <div className="product-price flex gap-2 items-end justify-center m-0">
                      <div className="text text-[16px] font-normal leading-[24px] text-[#444b52]">Giá chỉ</div>
                      <div className="price text-[20px] leading-7 font-medium text-[#cb1c22]">30.690.000đ</div>
                      <strike className="oldPrice text-[#939ca3] text-[16px] leading-6 font-normal">34.990.000đ</strike>
                    </div>
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
                <div className="product-item h-[534px] bg-[#fff] rounded-none pt-[24px] pb-[32px] px-[12px] flex flex-col basis-[calc(100%/3)] border-[1px] border-[#edeeef] border-t-0 border-l-0">
                  <div className="product-item-img h-[240px] px-[30px] mb-[16px] relative text-center ">
                    <a href="" className="block w-full">
                      <img
                        className=" w-[307px] h-[240px] object-contain transition-[all_.3s_ease]"
                        src={require("../../assets/images/List/Items/Iphone/Ip15pr_Ip15prm.webp")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-item-info flex flex-col items-center gap-[8px]">
                   
                    <div className="product-color flex gap-3 mb-4 justify-center ">
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#484A4B]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#F3F2ED]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#4C5363]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#BBB5A9]"></span>
                    </div>
                    <a href="/">
                      <h3 className="product_name text-[20px] leading-[28px] font-medium text-center overflow-hidden text-[#32373d] ">Iphone 15 Pro Max</h3>
                    </a>
                    <div className="product-memory w-[276px] m-[0_auto] flex rounded bg-[#edeeef] js...">
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out] bg-[#444b52] text-[#fff]">256GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">512GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">1TB</div>
                    </div>
                    <div className="product-price flex gap-2 items-end justify-center m-0">
                      <div className="text text-[16px] font-normal leading-[24px] text-[#444b52]">Giá chỉ</div>
                      <div className="price text-[20px] leading-7 font-medium text-[#cb1c22]">30.690.000đ</div>
                      <strike className="oldPrice text-[#939ca3] text-[16px] leading-6 font-normal">34.990.000đ</strike>
                    </div>
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
                <div className="product-item h-[534px] bg-[#fff] rounded-none pt-[24px] pb-[32px] px-[12px] flex flex-col basis-[calc(100%/3)] border-[1px] border-[#edeeef] border-t-0 border-l-0">
                  <div className="product-item-img h-[240px] px-[30px] mb-[16px] relative text-center ">
                    <a href="" className="block w-full">
                      <img
                        className=" w-[307px] h-[240px] object-contain transition-[all_.3s_ease]"
                        src={require("../../assets/images/List/Items/Iphone/Ip15pr_Ip15prm.webp")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-item-info flex flex-col items-center gap-[8px]">
                   
                    <div className="product-color flex gap-3 mb-4 justify-center ">
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#484A4B]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#F3F2ED]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#4C5363]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#BBB5A9]"></span>
                    </div>
                    <a href="/">
                      <h3 className="product_name text-[20px] leading-[28px] font-medium text-center overflow-hidden text-[#32373d] ">Iphone 15 Pro Max</h3>
                    </a>
                    <div className="product-memory w-[276px] m-[0_auto] flex rounded bg-[#edeeef] js...">
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out] bg-[#444b52] text-[#fff]">256GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">512GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">1TB</div>
                    </div>
                    <div className="product-price flex gap-2 items-end justify-center m-0">
                      <div className="text text-[16px] font-normal leading-[24px] text-[#444b52]">Giá chỉ</div>
                      <div className="price text-[20px] leading-7 font-medium text-[#cb1c22]">30.690.000đ</div>
                      <strike className="oldPrice text-[#939ca3] text-[16px] leading-6 font-normal">34.990.000đ</strike>
                    </div>
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
                <div className="product-item h-[534px] bg-[#fff] rounded-none pt-[24px] pb-[32px] px-[12px] flex flex-col basis-[calc(100%/3)] border-[1px] border-[#edeeef] border-t-0 border-l-0">
                  <div className="product-item-img h-[240px] px-[30px] mb-[16px] relative text-center ">
                    <a href="" className="block w-full">
                      <img
                        className=" w-[307px] h-[240px] object-contain transition-[all_.3s_ease]"
                        src={require("../../assets/images/List/Items/Iphone/Ip15pr_Ip15prm.webp")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-item-info flex flex-col items-center gap-[8px]">
                   
                    <div className="product-color flex gap-3 mb-4 justify-center ">
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#484A4B]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#F3F2ED]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#4C5363]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#BBB5A9]"></span>
                    </div>
                    <a href="/">
                      <h3 className="product_name text-[20px] leading-[28px] font-medium text-center overflow-hidden text-[#32373d] ">Iphone 15 Pro Max</h3>
                    </a>
                    <div className="product-memory w-[276px] m-[0_auto] flex rounded bg-[#edeeef] js...">
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out] bg-[#444b52] text-[#fff]">256GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">512GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">1TB</div>
                    </div>
                    <div className="product-price flex gap-2 items-end justify-center m-0">
                      <div className="text text-[16px] font-normal leading-[24px] text-[#444b52]">Giá chỉ</div>
                      <div className="price text-[20px] leading-7 font-medium text-[#cb1c22]">30.690.000đ</div>
                      <strike className="oldPrice text-[#939ca3] text-[16px] leading-6 font-normal">34.990.000đ</strike>
                    </div>
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
                <div className="product-item h-[534px] bg-[#fff] rounded-none pt-[24px] pb-[32px] px-[12px] flex flex-col basis-[calc(100%/3)] border-[1px] border-[#edeeef] border-t-0 border-l-0">
                  <div className="product-item-img h-[240px] px-[30px] mb-[16px] relative text-center ">
                    <a href="" className="block w-full">
                      <img
                        className=" w-[307px] h-[240px] object-contain transition-[all_.3s_ease]"
                        src={require("../../assets/images/List/Items/Iphone/Ip15pr_Ip15prm.webp")}
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="product-item-info flex flex-col items-center gap-[8px]">
                   
                    <div className="product-color flex gap-3 mb-4 justify-center ">
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#484A4B]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#F3F2ED]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#4C5363]"></span>
                      <span className="rounded-[50%] shadow-[0_1px_1px_rgba(0,0,0,.15)] w-4 h-4 bg-[#BBB5A9]"></span>
                    </div>
                    <a href="/">
                      <h3 className="product_name text-[20px] leading-[28px] font-medium text-center overflow-hidden text-[#32373d] ">Iphone 15 Pro Max</h3>
                    </a>
                    <div className="product-memory w-[276px] m-[0_auto] flex rounded bg-[#edeeef] js...">
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out] bg-[#444b52] text-[#fff]">256GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">512GB</div>
                      <div className="product-memory-item text-[14px] leading-[14px] p-2 font-medium flex-[1] relative rounded text-center cursor-pointer transition-[all_.3s_ease-in-out]">1TB</div>
                    </div>
                    <div className="product-price flex gap-2 items-end justify-center m-0">
                      <div className="text text-[16px] font-normal leading-[24px] text-[#444b52]">Giá chỉ</div>
                      <div className="price text-[20px] leading-7 font-medium text-[#cb1c22]">30.690.000đ</div>
                      <strike className="oldPrice text-[#939ca3] text-[16px] leading-6 font-normal">34.990.000đ</strike>
                    </div>
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
