import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { banner1, banner2, banner3 } from "../../Utils";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../ListProduct/ProductDetail.css";

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
      <div className=" bg-[#ffffff] pb-12 shadow-[0_1px_4px_rgba(10,10,10,.15)]">
        <div className="contai halfsm:px-[10px] w-full max-w-[1200px] px-[12px] mx-auto ">
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
          <div className="row flex flex-wrap mr-[calc(24px/-2)] ml-[calc(24px/-2)]">
            <div className="col-6 flex-[0_0_50%] max-w-[50%] px-3">
              <div className="slider-gallery top-[10px] sticky">
                <div className="slider-gallery__main mb-3">
                  <Swiper
                    swiper-initialized
                    swiper-horizontal
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    <SwiperSlide className="swiper-slide">
                      <picture className="block overflow-hidden relative w-full pt-[calc((.74653*100%)+0px)]">
                        <img
                          className=""
                          src="https://images.fpt.shop/unsafe/fit-in/576x430/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/20/638307989548944936_iphone-15-promax-xanh-1.jpg"
                          alt=""
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture className="block overflow-hidden relative w-full pt-[calc((.74653*100%)+0px)]">
                        <img
                          className=""
                          src="https://images.fpt.shop/unsafe/fit-in/576x430/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/20/638307989548944936_iphone-15-promax-xanh-1.jpg"
                          alt=""
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture className="block overflow-hidden relative w-full pt-[calc((.74653*100%)+0px)]">
                        <img
                          className=""
                          src="https://images.fpt.shop/unsafe/fit-in/576x430/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/20/638307989548944936_iphone-15-promax-xanh-1.jpg"
                          alt=""
                        />
                      </picture>
                    </SwiperSlide>
                    <SwiperSlide>
                      <picture className="block overflow-hidden relative w-full pt-[calc((.74653*100%)+0px)]">
                        <img
                          className=""
                          src="https://images.fpt.shop/unsafe/fit-in/576x430/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/20/638307989548944936_iphone-15-promax-xanh-1.jpg"
                          alt=""
                        />
                      </picture>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="col-6 flex-[0_0_50%] max-w-[50%] px-3">
              <div>
                <h1 className="text-[36px] leading-[48px] text-[32px] leading-8 font-medium mb-3">
                  iPhone 15 Pro Max 256GB
                </h1>
                <div className="npi-border border-[#0664f9] px-3 pt-3 pb-6 border-solid round-[0px_0px_6px_6px]">
                  <div className="price min-h-[40px] mb-4 flex justify-between items-center">
                    <div className="box-price flex items-center">
                      <span class="text-[32px] leading-[40px] font-medium text-[#cb1c22]">
                        29.390.000đ
                      </span>
                      <strike class="text-promo text-[#939ca3] text-[24px] leading-8 pl-2 font-normal">
                        34.990.000đ
                      </strike>
                    </div>
                  </div>
                  <div className="mb-4 flex rounded-md overflow-hidden">
                    <a
                      href
                      className="bg-[#edeeef] flex-[1] inline-flex flex-col items-center py-[6px] px-0 transition-[all_.3s_ease] text-[#444b52]"
                    >
                      <div className="radio flex items-center pointer-events-none m-0 font-medium">
                        <input
                          id="group-0"
                          type="radio"
                          defaultValue={0}
                          name="group-0"
                          className="m-[0_4px_0_0] relative rounded-none outline-none"
                        />
                        <label htmlFor="group-0 font-normal text-[14px] leading-[20px]">
                          256GB
                        </label>
                      </div>
                      <p class="text-[14px] leading-5 font-normal mb-0 text-[#444b52]">
                        29.390.000đ
                      </p>
                    </a>
                    <a
                      href
                      className="bg-[#edeeef] flex-[1] inline-flex flex-col items-center py-[6px] px-0 transition-[all_.3s_ease] text-[#444b52]"
                    >
                      <div className="radio flex items-center pointer-events-none m-0 font-medium">
                        <input
                          id="group-0"
                          type="radio"
                          defaultValue={0}
                          name="group-0"
                          className="m-[0_4px_0_0] relative rounded-none outline-none"
                        />
                        <label htmlFor="group-0 font-normal text-[14px] leading-[20px]">
                          256GB
                        </label>
                      </div>
                      <p class="text-[14px] leading-5 font-normal mb-0 text-[#444b52]">
                        29.390.000đ
                      </p>
                    </a>
                    <a
                      href
                      className="bg-[#edeeef] flex-[1] inline-flex flex-col items-center py-[6px] px-0 transition-[all_.3s_ease] text-[#444b52]"
                    >
                      <div className="radio flex items-center pointer-events-none m-0 font-medium">
                        <input
                          id="group-0"
                          type="radio"
                          defaultValue={0}
                          name="group-0"
                          className="m-[0_4px_0_0] relative rounded-none outline-none"
                        />
                        <label htmlFor="group-0 font-normal text-[14px] leading-[20px]">
                          256GB
                        </label>
                      </div>
                      <p class="text-[14px] leading-5 font-normal mb-0 text-[#444b52]">
                        29.390.000đ
                      </p>
                    </a>
                  </div>
                </div>
                <div className="colors mb-5 grid grid-cols-[118px_118px_118px_118px] gap-x-[calc(24px-2px)] gap-y-4">
                  <div className="item grid justify-items-center gap-1 p-[12px_7px_8px_7px] cursor-pointer relative">
                    <span className="bg-[#4C5363] w-7 h-7 rounded-[50%] shadow-[inset_0_2px_2px_rgba(0,0,0,.15)] inline-block relative "></span>
                    <div className="text-[16px] leading-6 font-normal text-center">
                      Titan Xanh
                    </div>
                  </div>
                  <div className="item grid justify-items-center gap-1 p-[12px_7px_8px_7px] cursor-pointer relative">
                    <span className="bg-[#4C5363] w-7 h-7 rounded-[50%] shadow-[inset_0_2px_2px_rgba(0,0,0,.15)] inline-block relative "></span>
                    <div className="text-[16px] leading-6 font-normal text-center">
                      Titan Xanh
                    </div>
                  </div>
                  <div className="item grid justify-items-center gap-1 p-[12px_7px_8px_7px] cursor-pointer relative">
                    <span className="bg-[#4C5363] w-7 h-7 rounded-[50%] shadow-[inset_0_2px_2px_rgba(0,0,0,.15)] inline-block relative "></span>
                    <div className="text-[16px] leading-6 font-normal text-center">
                      Titan Xanh
                    </div>
                  </div>
                  <div className="item grid justify-items-center gap-1 p-[12px_7px_8px_7px] cursor-pointer relative">
                    <span className="bg-[#4C5363] w-7 h-7 rounded-[50%] shadow-[inset_0_2px_2px_rgba(0,0,0,.15)] inline-block relative "></span>
                    <div className="text-[16px] leading-6 font-normal text-center">
                      Titan Xanh
                    </div>
                  </div>
                </div>
                <div className="warranty mb-4">
                  <div className="title text-[16px] leading-6 font-medium text-[#32373d] mb-1">
                    Chọn gói bảo hành
                  </div>

                  <div className="list flex flex-wrap gap-3">
                    <div className="relative flex flex-col justify-center py-1 px-2 rounded-md border-[1px] border-solid border-[#e1e4e6] basis-[calc(100%/2-6px)] cursor-pointer overflow-hidden item active focus:border-[#4391fb]">
                      <div className="item-row flex items-end">
                        <span className="txt font-medium text-[14px] leading-[20px] text-[#444b52]">
                          Bảo hành 1 năm cơ bản
                        </span>
                      </div>
                      <div className="item-row flex items-end">
                        <div className="item-row"></div>
                      </div>
                    </div>
                    <div className="relative flex flex-col justify-center py-1 px-2 rounded-md border-[1px] border-solid border-[#e1e4e6] basis-[calc(100%/2-6px)] cursor-pointer overflow-hidden item focus:border-[#4391fb]">
                      <div className="item-row flex items-end">
                        <span className="txt font-medium text-[14px] leading-[20px] text-[#444b52]">
                          Bảo hành 1 năm cơ bản
                        </span>
                      </div>
                      <div className="item-row flex items-end">
                        <span className="item-price text-[16px] leading-6 font-medium text-[#cb1c22]">
                          +700.000đ
                        </span>
                        <strike className="text-[14px] leading-5 ml-2 py-[2px] px-0">
                          2.000.000đ
                        </strike>
                      </div>
                    </div>
                    <div className="relative flex flex-col justify-center py-1 px-2 rounded-md border-[1px] border-solid border-[#e1e4e6] basis-[calc(100%/2-6px)] cursor-pointer overflow-hidden item focus:border-[#4391fb]">
                      <div className="item-row flex items-end">
                        <span className="txt font-medium text-[14px] leading-[20px] text-[#444b52]">
                          Bảo hành 1 năm cơ bản
                        </span>
                      </div>
                      <div className="item-row flex items-end">
                        <span className="item-price text-[16px] leading-6 font-medium text-[#cb1c22]">
                          +700.000đ
                        </span>
                        <strike className="text-[14px] leading-5 ml-2 py-[2px] px-0">
                          2.000.000đ
                        </strike>
                      </div>
                    </div>
                    <div className="relative flex flex-col justify-center py-1 px-2 rounded-md border-[1px] border-solid border-[#e1e4e6] basis-[calc(100%/2-6px)] cursor-pointer overflow-hidden item focus:border-[#4391fb]">
                      <div className="item-row flex items-end">
                        <span className="txt font-medium text-[14px] leading-[20px] text-[#444b52]">
                          Bảo hành 1 năm cơ bản
                        </span>
                      </div>
                      <div className="item-row flex items-end">
                        <span className="item-price text-[16px] leading-6 font-medium text-[#cb1c22]">
                          +700.000đ
                        </span>
                        <strike className="text-[14px] leading-5 ml-2 py-[2px] px-0">
                          2.000.000đ
                        </strike>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="block-promotion border-[1px] border-solid border-[#edeeef] rounded-sm mb-4 bg-[#f8f9fa]">
                  <div className="block-promotion-box">
                    <div className="block-promotion-head py-2 px-3 border-b-[1px] border-solid border-b-[#edeeef]">
                      <div className="title text-[#32373d] text-[16px] font-medium leading-6 ">
                        Ưu đãi ngay
                      </div>
                    </div>
                    <div className="block-promotion-body py-2 px-0">
                      <ul className="lstPv1 list-none">
                        <li>
                          <div className="radio ">
                            <label
                              data-pricediscountpv1={5600000}
                              className="getDataPromoV1"
                            >
                              <input
                                className="radio-input promoV1"
                                type="radio"
                                name="promotion"
                                defaultValue={1}
                                defaultChecked
                              />
                              <span className="radio-label">
                                Giảm ngay 5,100,000đ khi mua màu Titan Xanh áp
                                dụng đến 18/04 + Đặc quyền dành cho sinh viên -
                                Giảm thêm 500,000đ áp dụng đến 30/04
                              </span>
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="block-promotion-box block-promotion-more border-t-[1px] border-solid border-t-[#edeeef]">
                      <div className="block-promotion-head p-0 border-b-0">
                        <div className="title title-more inline-flex items-center justify-center bg-[#edeeef] py-1 px-3 text-[#32373d] text-[14px] font-medium leading-5 rounded-[0_0_4px_0]">
                          Ưu đãi thêm
                        </div>
                      </div>
                      <div className="block-promotion-body py-2 px-0">
                        <ul className="list-none">
                          <li className="flex items-center py-1 px-3">
                            <i className="ic-check" />

                            <div>
                              <span className="flex-[1] ml-2 ">
                                Đặc quyền hộp quà 1.500.000đ dành riêng cho 600
                                khách hàng nhận hàng sớm tại cửa hàng.
                              </span>
                              <a
                                href="https://fptshop.com.vn/tin-tuc/tin-khuyen-mai/f-studio-by-fpt-danh-tang-600-combo-phu-kien-cho-khach-hang-dat-truoc-iphone-15-series-162170"
                                className="re-link ml-1 text-[#0664f9] bg-transparent m-0 p-0 text-full "
                              >
                                Xem chi tiết
                              </a>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="combo-accessory mb-4 rounded-md border-[1px] border-solid border-[##edeeef] bg-[#f8f9fa] overflow-hidden"></div>
                <div className="renderboxbtnNew block1">
                  <div className="action flex mb-4 mt-5 justify-center gap-4">
                    <a
                      href
                      className="btn inline-flex items-center justify-center flex-col transition-[all_.3s_cubic-bezier(0,0,.4,1)] px-8 border-[1px] border-transparent flex-[1] max-w-[576px] h-[56px] text-[#ffffff] bg-[#0664f9] text-[20px] leading-[20px] rounded-md hover:bg-[#044dd6] hover:border-[#044dd6]"
                    >
                      <div>MUA NGAY</div>
                    </a>
                    <a
                      href
                      className="flex items-center justify-center flex-col transition-[all_.3s_cubic-bezier(0,0,.4,1)] px-8 border-[1px] flex-[1] max-w-[576px] h-[56px] text-[#6a737a] bg-[#fff] text-[20px] leading-[20px] rounded-md border-[#cbd1d6] hover:bg-[#939ca3] hover:border-[#939ca3] hover:text-[#fff]"
                    >
                      <div>TRẢ GÓP</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="detail_body">
        <div className="product-related mt-12">
          <div className=" halfsm:px-[10px] w-full max-w-[1200px] px-[12px] mx-auto ">
            <div className="card rounded-md block shadow-[0_1px_4px_rgba(10,10,10,.15)] bg-[#fff]">
              <div className="card-body pb-4">
                <div className="row flex flex-wrap mx-0">
                  <div className="col-12 px-0 flex-[0_0_100%] max-w-full">
                    <div className="product-related__heading py-4 px-5">
                      <div className="h4 text-[20px] font-medium leading-7">
                        Phụ kiện tương thích
                      </div>
                    </div>
                  </div>
                  <div className=" flex-[0_0_25%] max-w-[25%] sm:flex-[0_0_50%] sm:max-w-[50%] xs:flex-[0_0_100%] xs:max-w-full">
                    <div className="item grid gap-4 p-3 sm:gap-2 py-0 px-2">
                      <a
                        className="item__img h-[210px] text-center sm:h-[154px]"
                        href="/phu-kien/sac-20w-usb-c-power-adapter"
                      >
                        <img
                          className="h-full w-auto"
                          src="https://images.fpt.shop/unsafe/fit-in/210x210/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/20/637387863045167961_pk-apple-00720432-dd.png"
                          alt="Củ sạc Apple Power Adapter 20W Type-C"
                        />
                      </a>
                      <div className="item__info grid gap-[8px]">
                        <a href="/phu-kien/sac-20w-usb-c-power-adapter">
                          <div className="item__name text-[18px] leading-6 font-medium text-[#32373d] overflow-hidden sm:text-[14px] sm:leading-5 sm:font-medium">
                            Củ sạc Apple Power Adapter 20W Type-C
                          </div>
                        </a>
                        <div className="item__price flex items-center gap-2 sm:flex-col sm:items-start sm:gap-0">
                          <div className="text text-primary text-[18px] leading-6 font-medium text-[#cb1c22] sm:text-[14px] sm:leading-5 sm:font-medium">
                            489.000₫
                          </div>
                          <strike className="text text-grayscale text-[#939ca3] text-[14px] leading-5">
                            549.000₫
                          </strike>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex-[0_0_25%] max-w-[25%] sm:flex-[0_0_50%] sm:max-w-[50%] xs:flex-[0_0_100%] xs:max-w-full">
                    <div className="item grid gap-4 p-3 sm:gap-2 py-0 px-2">
                      <a
                        className="item__img h-[210px] text-center sm:h-[154px]"
                        href="/phu-kien/sac-20w-usb-c-power-adapter"
                      >
                        <img
                          className="h-full w-auto"
                          src="https://images.fpt.shop/unsafe/fit-in/210x210/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/20/637387863045167961_pk-apple-00720432-dd.png"
                          alt="Củ sạc Apple Power Adapter 20W Type-C"
                        />
                      </a>
                      <div className="item__info grid gap-[8px]">
                        <a href="/phu-kien/sac-20w-usb-c-power-adapter">
                          <div className="item__name text-[18px] leading-6 font-medium text-[#32373d] overflow-hidden sm:text-[14px] sm:leading-5 sm:font-medium">
                            Củ sạc Apple Power Adapter 20W Type-C
                          </div>
                        </a>
                        <div className="item__price flex items-center gap-2 sm:flex-col sm:items-start sm:gap-0">
                          <div className="text text-primary text-[18px] leading-6 font-medium text-[#cb1c22] sm:text-[14px] sm:leading-5 sm:font-medium">
                            489.000₫
                          </div>
                          <strike className="text text-grayscale text-[#939ca3] text-[14px] leading-5">
                            549.000₫
                          </strike>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex-[0_0_25%] max-w-[25%] sm:flex-[0_0_50%] sm:max-w-[50%] xs:flex-[0_0_100%] xs:max-w-full">
                    <div className="item grid gap-4 p-3 sm:gap-2 py-0 px-2">
                      <a
                        className="item__img h-[210px] text-center sm:h-[154px]"
                        href="/phu-kien/sac-20w-usb-c-power-adapter"
                      >
                        <img
                          className="h-full w-auto"
                          src="https://images.fpt.shop/unsafe/fit-in/210x210/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/20/637387863045167961_pk-apple-00720432-dd.png"
                          alt="Củ sạc Apple Power Adapter 20W Type-C"
                        />
                      </a>
                      <div className="item__info grid gap-[8px]">
                        <a href="/phu-kien/sac-20w-usb-c-power-adapter">
                          <div className="item__name text-[18px] leading-6 font-medium text-[#32373d] overflow-hidden sm:text-[14px] sm:leading-5 sm:font-medium">
                            Củ sạc Apple Power Adapter 20W Type-C
                          </div>
                        </a>
                        <div className="item__price flex items-center gap-2 sm:flex-col sm:items-start sm:gap-0">
                          <div className="text text-primary text-[18px] leading-6 font-medium text-[#cb1c22] sm:text-[14px] sm:leading-5 sm:font-medium">
                            489.000₫
                          </div>
                          <strike className="text text-grayscale text-[#939ca3] text-[14px] leading-5">
                            549.000₫
                          </strike>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex-[0_0_25%] max-w-[25%] sm:flex-[0_0_50%] sm:max-w-[50%] xs:flex-[0_0_100%] xs:max-w-full">
                    <div className="item grid gap-4 p-3 sm:gap-2 py-0 px-2">
                      <a
                        className="item__img h-[210px] text-center sm:h-[154px]"
                        href="/phu-kien/sac-20w-usb-c-power-adapter"
                      >
                        <img
                          className="h-full w-auto"
                          src="https://images.fpt.shop/unsafe/fit-in/210x210/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2020/10/20/637387863045167961_pk-apple-00720432-dd.png"
                          alt="Củ sạc Apple Power Adapter 20W Type-C"
                        />
                      </a>
                      <div className="item__info grid gap-[8px]">
                        <a href="/phu-kien/sac-20w-usb-c-power-adapter">
                          <div className="item__name text-[18px] leading-6 font-medium text-[#32373d] overflow-hidden sm:text-[14px] sm:leading-5 sm:font-medium">
                            Củ sạc Apple Power Adapter 20W Type-C
                          </div>
                        </a>
                        <div className="item__price flex items-center gap-2 sm:flex-col sm:items-start sm:gap-0">
                          <div className="text text-primary text-[18px] leading-6 font-medium text-[#cb1c22] sm:text-[14px] sm:leading-5 sm:font-medium">
                            489.000₫
                          </div>
                          <strike className="text text-grayscale text-[#939ca3] text-[14px] leading-5">
                            549.000₫
                          </strike>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail__properties py-12 px-0">
          <div className="halfsm:px-[10px] w-full max-w-[1200px] px-[12px] mx-auto ">
            <div className="properties__detail">
              <div className="properties">
                <div className="halfsm:px-[10px] w-full max-w-[1200px] px-[12px] mx-auto ">
                  <div className="flex flex-wrap justify-center mx-[calc(24px/-2)]">
                    <div className="flex-[0_0_50%] max-w-[50%] md:flex-[0_0_100%] md:max-w-full">
                      <div className="properties__detail">
                        <div className="h4 text-[32px] leading-[40px] font-medium mb-4">
                          Thông số kĩ thuật
                        </div>
                        {/* 
                        <div class="card card-md">
<div class="card-body">
<table class="table">
<tbody></tbody>
<tbody><tr>
<td>
Màn hình
</td>
<td>
6.7 inch, OLED, Super Retina XDR, 2796 x 1290 Pixels
</td>
</tr>
<tr>
<td>
Camera sau
</td>
<td>
48.0 MP + 12.0 MP + 12.0 MP
</td>
</tr>
<tr>
<td>
Camera Selfie
</td>
<td>
12.0 MP
</td>
</tr>
<tr>
<td>
RAM
</td>
<td>
8 GB
</td>
</tr>
<tr>
<td>
Bộ nhớ trong
</td>
<td>
256 GB
</td>
</tr>
<tr>
<td>
CPU
</td>
<td>
Apple A17 Pro
</td>
</tr>
<tr>
<td>
Dung lượng pin
</td>
<td>
29
</td>
</tr>
<tr>
<td>
Thẻ sim
</td>
<td>
1 - 1 eSIM, 1 Nano SIM
</td>
</tr>
<tr>
<td>
Hệ điều hành
</td>
<td>
iOS 17
</td>
</tr>
<tr>
<td>
Xuất xứ
</td>
<td>
Trung Quốc
</td>
</tr>
<tr>
<td>
Thời gian ra mắt
</td>
<td>
09/2023
</td>
</tr>
</tbody></table>
<div class="trigger">
<a class="link" aria-controls="properties-modal">
Xem cấu hình chi
tiết<span class="ic-angle-right"></span>
</a>
</div>
</div>
</div>
                        */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
