import React from "react";
function formatCash(str) {
  if (typeof str !== "string") {
    return str;
  }
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ",") + prev;
    });
}
function ProductItem({ product }) {
  return (
    <div className="product-item h-[534px] bg-[#fff] rounded-none pt-[24px] pb-[32px] px-[12px] flex flex-col basis-[calc(100%/3)] border-[1px] border-[#edeeef] border-t-0 border-l-0">
      <div className="product-item-img h-[240px] px-[30px] mb-[16px] relative text-center">
        <a href="" className="block w-full">
          <img
            className="w-[307px] h-[240px] object-contain transition-[all_.3s_ease]"
            src={require("../assets/images/List/Items/Iphone/Ip11.jpg")}
            alt=""
          />
        </a>
      </div>
      <div className="product-item-info flex flex-col items-center gap-[8px]">
        <div className="product-color flex gap-3 mb-4 justify-center">
          {/* Mã màu sản phẩm */}
        </div>
        <a href="/">
          <h3 className="product_name text-[20px] leading-[28px] font-medium text-center overflow-hidden text-[#32373d]">
            {product.product_name}
          </h3>
        </a>
        <div className="product-price flex gap-2 items-end justify-center m-0">
          <div className="text text-[16px] font-normal leading-[24px] text-[#444b52]">
            Giá chỉ
          </div>
          <div className="price text-[20px] leading-7 font-medium text-[#cb1c22]">
            {formatCash(product.MaxCaptionPrice)} đ
          </div>
          <strike className="oldPrice text-[#939ca3] text-[16px] leading-6 font-normal">
            {formatCash(product.OldPrice)} đ
          </strike>
        </div>
      </div>
      <div className="product-item-detail flex flex-[1] mt-4 justify-center items-start">
        <a
          href="/"
          className="w-[176px] text-[#6a737a] border border-[#cbd1d6] bg-[#ffffff] h-[32px] px-[12px] text-[16px] leading-4 inline-flex items-center justify-center flex-col select-none transition-[all_.3s_cubic-bezier(0,0,.4,1)] pointer"
        >
          XEM CHI TIẾT
        </a>
      </div>
    </div>
  );
}

export default ProductItem;
