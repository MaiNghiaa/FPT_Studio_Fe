import React from "react";
// import Image from "../../assets/Store/637961834239224907_fs1.jpg";

export default function Header() {
  return (
    <div className="Header">
      {/* width: 100%; max-width: 1200px; padding-right: 12px; padding-left: 12px;
      margin-right: auto; margin-left: auto; */}
      <div className="Header_top bg-black">
        <div className=" w-full w-[100%] max-w-[1200px] px-[12px] mx-auto">
          <div className="wrapper py-[8px] flex items-center justify-center">
            <div className="header-logo max-w-[276px] flex-auto">
              <a href="\">
                <img
                  src="https://fstudiobyfpt.com.vn/ContentV2/assets/img/logo-fstu-aar.png"
                  alt=""
                  className=""
                />
              </a>
            </div>
            <div className="header-search flex-1 bg-[rgba(255,255,255,.15)]">
              <form action>
                <div className="flex  border-none px-[16px] min-h-[28px] text-[#939ca3] w-[476px] mx-0 my-auto  ">
                  <span>
                    <i className="el el-search"></i>
                  </span>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="border-none outline-none bg-transparent"
                  />
                </div>
              </form>
            </div>
            <div className="header-cart flex-1"></div>
            <p></p>
          </div>
        </div>
        <div className="header-bot bg-[#212529] flex justify-center items-center">
          <div className="wrapper w-[100%] max-w-[1200px] px-[12px] mx-[auto]">
            <ul className="flex">
              <li className="block py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
                <a href="\">Iphone</a>
              </li>
              <li className="block py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
                <a href="\">Ipad</a>
              </li>
              <li className="block py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
                <a href="\">Mac</a>
              </li>
              <li className="block py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
                <a href="\">Apple Watch</a>
              </li>
              <li className="block py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
                <a href="\">Phụ kiện</a>
              </li>
              <li className="block py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
                <a href="\">Tin tức</a>
              </li>
              <li className="block py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
                <a href="\">Workshop</a>
              </li>
              <li className="block py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
                <a href="\">Khuyến mãi</a>
              </li>
              <li className="block py-[19px] px-0 text-[#939ca3] text-[14px] leading-[14px] font-[400] min-w-[122px]">
                <a href="\">F.Care</a>
              </li>
            </ul>
            <div className="phone-hotline">
              <a href="tel:+84123456789">Gọi 1800 6601</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
