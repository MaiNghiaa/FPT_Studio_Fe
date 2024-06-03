import React from "react";
import Banner from "./Sections/Banner";
import Cate from "./Sections/Cate";
import News from "./Sections/News";
import FooterGallery from "../../../Layouts/Sections/Footer/FooterGallery";
// Import images using require
const banner1 = require("../../../Utils/utils").banner1;
const banner2 = require("../../../Utils/utils").banner2;
const banner3 = require("../../../Utils/utils").banner3;

export default function LandingPage() {
  return (
    <div>
      <section className="">
        <Banner banners={[banner1, banner2, banner3]} />
      </section>
      <section className="bg-[#212529] pt-[48px] pb-[48px] text-white">
        <div className="cate_container w-[100%] max-w-[1200px] px-[12px] mx-auto">
          <Cate />
        </div>
      </section>
      <section className="bg-[#212529] pb-[48px] text-white">
        <div className="News_container w-[100%] max-w-[1200px] px-[12px] mx-auto">
          <News />
        </div>
      </section>
      <section className=" footer__gallery bg-[#212529] text-white pb-[38px]">
        <FooterGallery />
      </section>
    </div>
  );
}
