import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../ListProduct/ListItem.css";
import FooterGallery from "../../Layouts/Sections/Footer/FooterGallery";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductItem from "../../Components/ProductItem";
// Swiper.use([Navigation, Pagination, Scrollbar]);
export default function ListItem() {
  const [value, setValue] = React.useState("react");
  const [productData, setProductData] = useState(null);
  // const [selectedValue, setSelectedValue] = useState("");
  const { Product } = useParams();

  function Find(event) {
    console.log(event.target.value);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    if (value === "LtH") {
      // Sap xep tu thap toi cao
      const sortedData = [...productData].sort((a, b) => {
        return parseInt(a.MaxCaptionPrice) - parseInt(b.MaxCaptionPrice);
      });
      setProductData(sortedData); // Cập nhật trạng thái với dữ liệu đã sắp xếp
    }
    if (value === "HtL") {
      // Sap xep tu Cao toi thao
      const sortedData = [...productData].sort((b, a) => {
        return parseInt(a.MaxCaptionPrice) - parseInt(b.MaxCaptionPrice);
      });
      setProductData(sortedData);
    }
    // console.log("Selected value:", value);
  };
  // console.log(Product);
  useEffect(() => {
    if (Product) {
      axios
        .get(`http://localhost:3000/iphone`)
        .then((response) => {
          // Xử lý dữ liệu nhận được từ API
          // console.log("oke");
          console.log(response.data);
          setProductData(response.data);
        })
        .catch((error) => {
          // Xử lý lỗi nếu có
          console.error("There was an error!", error);
        });
    }
  }, []);

  // const navigationPrevRef = React.useRef(null);
  // const navigationNextRef = React.useRef(null);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
                    <button
                      onchange={() => Find(99)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      Tất cả
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button
                      onchange={() => Find(1)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 15 Pro Max
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button
                      onClick={() => Find(2)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 15 Pro
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button
                      onClick={() => Find(3)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 15 Plus
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button
                      onClick={() => Find(4)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 15
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button
                      onClick={() => Find(5)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 14 Pro Max
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button
                      onClick={() => Find(6)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 14 Plus
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button
                      onClick={() => Find(7)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 14
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button
                      onClick={() => Find(8)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 13
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button
                      onClick={() => Find(9)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 12
                    </button>
                  </SwiperSlide>
                  <SwiperSlide>
                    <button
                      onClick={() => Find(10)}
                      className="whitespace-nowrap w-auto min-w-[140px] text-center inline-block text-[16px] leading-6 font-normal text-[#6a737a] py-[6px] px-3 rounded"
                    >
                      iPhone 11
                    </button>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div className="content flex justify-end items-center gap-2">
                <div className="text text-sm leading-5 font-normal text-[#444b52]">
                  Sắp xếp theo:
                </div>

                <select
                  name="Filter"
                  id="Filter"
                  onChange={handleChange}
                  // value={selectedValue}
                  className="outline-[#cbd1d6] border focus:border-[#cbd1d6] rounded border-[#cbd1d6] min-w-[124px] w-auto py-1 pl-3 pr-8 cursor-pointer text-[#444b52] bg-[#ffffff] font-normal inline-flex items-center relative justify-between transition-[all_.3s_cubic-bezier(0,0,.4,1)]"
                >
                  <option disabled selected hidden>
                    Choose ...
                  </option>
                  <option value="LtH">Giá thấp đến cao</option>
                  <option value="HtL">Giá cao đến thấp</option>
                </select>
              </div>
            </div>

            <div className="tab-pane">
              <div className="product-list flex bg-[#fff] flex-wrap relative flex-row">
                {/* Kiểm tra xem dữ liệu đã được nhận chưa */}
                {productData ? (
                  productData.map((product, index) => (
                    <ProductItem key={index} product={product} />
                  ))
                ) : (
                  <p>Loading...</p>
                )}
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
