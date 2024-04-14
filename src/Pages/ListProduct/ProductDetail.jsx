import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function ProductDetail() {
  const { Product, Detail } = useParams();

  // useEffect(() => {
  //   if (Detail) {
  //     console.log(Detail, Product);
  //     axios
  //       .get(`http://localhost:3000/${Product}/${Detail}`)
  //       .then((response) => {})
  //       .catch((error) => {
  //         // Xử lý lỗi nếu có
  //         console.error("There was an error!", error);
  //       });
  //   }
  // }, []);
  return (
    <div>
      <div className="w-full max-w-[1200px] px-[12px] mx-auto ">
        <ol className="breadcrumb py-[6px] px-0 flex list-none mb-[8px]">
          <li className="breadcrumb-item h-5 text-[#444b52] text-[14px] leading-5">
            <a href="/" className="text-[#0664f9] relative inline-block">
              Trang chủ
            </a>
          </li>
          {Detail ? (
            <li className="breadcrumb-item2  h-5 text-[#0664f9] text-[14px] leading-5">
              {Product}
            </li>
          ) : (
            <li className="breadcrumb-item2  h-5 text-[#444b52] text-[14px] leading-5">
              {Product}
            </li>
          )}
        </ol>
        <div className="flex flex-wrap mr-[calc(24px/-2)] ml-[calc(24px/-2)]"></div>
        <div className="flex flex-wrap mr-[calc(24px/-2)] ml-[calc(24px/-2)]">
          <div className="top-[10px] sticky"></div>
        </div>
      </div>
    </div>
  );
}
