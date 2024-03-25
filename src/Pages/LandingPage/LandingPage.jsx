import React from "react";
import Header from "../../Layouts/Header";
import Footer from "../../Layouts/Footer";
import Banner from "./Sections/Banner";
import Cate from "./Sections/Cate";
import News from "./Sections/News";

export default function LandingPage() {
  return <div>
    <Header />
      <section className=""><Banner /></section>
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
    <Footer />
  </div>;
}
