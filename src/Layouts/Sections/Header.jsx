import React from "react";
// import Image from "../../assets/Store/637961834239224907_fs1.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { imgLogo } from "../../Utils";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header_top bg-black py-5">
        <div className="flex items-center justify-center w-full max-w-[1200px] px-[12px] mx-auto ">
          <div className="header-logo max-w-[276px] flex-auto">
            <a href="\">
              <img src={imgLogo} alt="" className="" />
            </a>
          </div>
          <div className="header-search flex-1 bg-[rgba(255,255,255,.15)] mx-[125.953px]">
            <form action>
              <div className="flex  border-none px-[16px] min-h-[28px] text-[#939ca3] w-[476px]">
                <span></span>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border-none outline-none bg-transparent text-[14px] leading-5 flex-1 mr-[8px] py-[1px] px-[2px]"
                  placeholder="Bạn đang tìm sản phẩm, tin tức, workshop..."
                />
              </div>
            </form>
          </div>
          <div className="header-cart flex-1  inline-flex items-center text-[#e1e4e6] py-[10px] pl-[24px] ">
            <img
              src={require("../../assets/images/icons/item.png")}
              alt=""
              className="w-[32px] h-32px"
            />
            <p className="text-[14px] leading-5 ml-2">Giỏ hàng của bạn</p>
          </div>
        </div>
      </div>
      <div className="header-bot bg-[#212529] flex justify-center items-center">
        <div className="wrapper w-[100%] max-w-[1200px] px-[12px] mx-[auto] flex items-center">
          <ul className="flex">
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/iphone" className="w-full">Iphone</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/Ipad" className="w-full">Ipad</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/Mac" className="w-full">Mac</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/Apple_Watch" className="w-full">Apple Watch</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <a href="\">Phụ kiện</a>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <a href="\">Tin tức</a>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <a href="\">Workshop</a>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px] text-[#f6c743] font-medium">
              <a href="\">Khuyến mãi</a>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <a href="\">F.Care</a>
            </li>
          </ul>

          <button className="phone-hotline ml-[52px] border-1">
            <a
              href="tel:+84123456789"
              className="text-[#fff] bg-[#0664f9] outline-none px-[12px] h-[28px] flex items-center justify-center"
            >
              <i className="w-[16px] text-[16px]">*</i>
              <span className="whitespace-nowrap">Gọi 1800 6601</span>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
