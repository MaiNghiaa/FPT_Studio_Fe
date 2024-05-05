import React from "react";
import { Link } from "react-router-dom";

import "../Sections/Cate.css";
import {
  Titleitemgs1,
  Titleitemgs2,
  Titleitemgs3,
  Titleitemgs4,
  Titleitemgs5,
} from "./../../../Utils/utils";
export default function Cate() {
  return (
    <div className="List-cate flex gap-6 items-baseline">
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <Link to="/iPhone" className="flex flex-col items-center">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            iPhone
          </p>
          <img className="cateimg" src={Titleitemgs1} alt="iPhone" />
        </Link>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <Link to="/iPad" className="flex flex-col items-center">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            iPad
          </p>
          <img className="cateimg" src={Titleitemgs2} alt="iPad" />
        </Link>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <Link to="/Mac" className="flex flex-col items-center">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            Mac
          </p>
          <img className="cateimg" src={Titleitemgs3} alt="Mac" />
        </Link>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <Link to="/Apple Watch" className="flex flex-col items-center">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            Apple Watch
          </p>
          <img className="cateimg" src={Titleitemgs4} alt="Apple Watch" />
        </Link>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <Link to="/Phu Kien" className="flex flex-col items-center">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            Phụ kiện
          </p>
          <img className="cateimg" src={Titleitemgs5} alt="Phụ kiện" />
        </Link>
      </div>
    </div>
  );
}
