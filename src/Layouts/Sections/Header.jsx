import React from "react";
// import Image from "../../assets/Store/637961834239224907_fs1.jpg";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import { imgLogo } from "../../Utils";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header small:max-w-[640px] small:w-full small:m-auto small:relative">
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
            <div

              className="w-[32px] h-32px bg-[red] block text-[red]">aa
              </div>
            <p className="text-[14px] leading-5 ml-2 small:invisible small:hidden">Giỏ hàng của bạn</p>
          </div>
        </div>
      </div>
      <div className="header-bot bg-[#212529] flex justify-center items-center">
        <div className="wrapper w-[100%] max-w-[1200px] px-[12px] mx-[auto] flex items-center">
          <ul className="flex shink-0 big:flex-row small:flex-col small:hidden">
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/iphone" className="flex justify-center items-center">Iphone</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/Ipad" className="flex justify-center items-center">Ipad</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/Mac" className="flex justify-center items-center">Mac</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
              <Link to="/Apple_Watch" className="flex justify-center items-center">Apple Watch</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
            <Link to="/phu-kien" className="flex justify-center items-center">Phụ kiện</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
            <Link to="/tin-tuc" className="flex justify-center items-center">Tin tức</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
            <Link to="/today" className="flex justify-center items-center">Workshop</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px] text-[#f6c743] font-medium">
            <Link to="/khuyen-mai" className="flex justify-center items-center">Khuyến mãi</Link>
            </li>
            <li className="flex justify-center items-center py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
            <Link to="/fcare" className="flex justify-center items-center">F.Care</Link>
            </li>
          </ul>

          <button className="phone-hotline ml-[52px] border-1 small:invisible small:hidden">
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
