import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Sections/Header";
import Footer from "./Sections/Footer";

export default function PageLayout() {
  return (
    <main className=" relative">
      <Header />
      <div id="body" className="my-[72px] xl:mt-auto">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
