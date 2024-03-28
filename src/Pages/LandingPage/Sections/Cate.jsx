import React from "react";
import "../Sections/Cate.css";
import {
  Titleitemgs1,
  Titleitemgs2,
  Titleitemgs3,
  Titleitemgs4,
  Titleitemgs5,
} from "../../../Utils";
export default function Cate() {
  return (
    <div className="List-cate flex gap-6 items-baseline">
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <a href="\" className="flex items-center flex-col">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            iPhone
          </p>
          <img className="cateimg" src={Titleitemgs1} alt="iPhone" />
        </a>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <a href="\" className="flex items-center flex-col">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            iPad
          </p>
          <img className="cateimg" src={Titleitemgs2} alt="iPad" />
        </a>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <a href="\" className="flex items-center flex-col">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            Mac
          </p>
          <img className="cateimg" src={Titleitemgs3} alt="Mac" />
        </a>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <a href="\" className="flex items-center flex-col">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            Apple Watch
          </p>
          <img className="cateimg" src={Titleitemgs4} alt="Apple Watch" />
        </a>
      </div>
      <div className="Cate__item pt-[24px] pb-[32px] bg-[#32373d] shadow-[0_0_16px_rgba(0,0,0,.7)] rounded-[6px]">
        <a href="\" className="flex items-center flex-col">
          <p className="Cate__item-title text-[20px] leading-7 font-medium mb-[16px]">
            Phụ kiện
          </p>
          <img className="cateimg" src={Titleitemgs5} alt="Phụ kiện" />
        </a>
      </div>
    </div>
  );
}
