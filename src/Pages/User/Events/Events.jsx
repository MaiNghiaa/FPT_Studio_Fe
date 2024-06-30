import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Events() {
  const [DataWorkshop, setDataWorkshop] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/Workshop`)
      .then((response) => {
        setDataWorkshop(response.data);
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        console.error("There was an error!", error);
      });
  }, []); //Chi fetch API 1 lần
  return (
    <div className="bg-[#f8f9fa]">
      <div className="wrap-breadcrumb bg-[#f8f9fa]">
        <ol className="breadcrumb w-full max-w-[1176px] bg-[upset] my-0 mx-auto py-[6px] px-0 flex flex-wrap list-none">
          <li className="breadcrumb-item h-5 text-[#444b52] text-[14px] leading-5">
            <a href="/" className="text-[#0664f9] relative inline-block">
              Trang chủ
            </a>
          </li>
          <li className="breadcrumb-item2  h-5 text-[#444b52] text-[14px] leading-5">
            Workshop
          </li>
        </ol>
      </div>
      <h1 className="h1 text-center text-4xl leading-9 font-medium mb-12 mt-2">
        Workshop
      </h1>
      {/* <div className="block-coming mb-12">
        <div className="box-container w-full max-w-[1200px] py-0 px-3 relative my-0 mx-auto">
          <p className="title text-xl font-medium text-[#32373d] mb-6">
            WORKSHOP SẮP DIỄN RA
          </p>
          <div className="wrap-item flex flex-wrap mb-6 justify-start">
            <a
              href=""
              className="cursor-pointer w-[33%] max-w-[376px] rounded-md overflow-hidden shadow-[0_1px_4px_0_#0a0a0a26]"
            >
              <div className="img-item w-full max-w-[776px] mr-6">
                <img
                  src="http://localhost:3000/assets/images/List/Workshop/638421230734784211_z5095081155166_1c230713c6cc56625471874a5268384e.webp"
                  alt=""
                  className="w-[376px] h-[211.44px] object-cover border-none"
                />
              </div>
              <div className="text-item mx-[12px] mt-2 mb-3">
                <div className="text-[18px] leading-6 font-medium text-[#32373d] mb-1">
                  Workshop Shot on iPhone 15 - Dựng video chuyên nghiệp cùng
                  chuyên gia
                </div>

                <div className="time flex  items-center justify-start">
                  <div className="day flex mr-5 items-center relative dot">
                    <i className="text-[16px] mr-1 text-[#939ca3] ic-calendar"></i>
                    <div className="text-[14px] leading-5 text-[#6a737a]">
                      Chủ Nhật, 31/03/2024
                    </div>
                  </div>
                  <div className="hour mr-5 items-center flex">
                    <i className="text-[16px] mr-1 text-[#939ca3] ic-line-time"></i>
                    <div className="text-[14px] leading-5 text-[#6a737a]">
                      03:00 - 05:00
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div> */}
      <div className="block-happened pb-12">
        <div className="box-container w-full max-w-[1200px] py-0 px-3 relative my-0 mx-auto">
          <p className="title text-xl font-medium text-[#32373d] mb-6">
            {/* WORKSHOP ĐÃ DIỄN RA */}
          </p>
          <div className="happened">
            <div className="flex flex-wrap justify-start mb-6 gap-6">
              {DataWorkshop &&
                DataWorkshop.map((itemWorkshop, index) => {
                  return (
                    <a
                      onClick={(e) => e.preventDefault()}
                      key={index}
                      href=" "
                      className="cursor-default w-[33%] max-w-[376px] rounded-md overflow-hidden shadow-[0_1px_4px_0_#0a0a0a26]"
                    >
                      <div className="img-item w-full max-w-[776px] mr-6">
                        <img
                          src={`http://localhost:3000/assets/${itemWorkshop.Ws_image}`}
                          alt=""
                          className="w-[376px] h-[211.44px] object-cover border-none"
                        />
                      </div>
                      <div className="text-item mx-[12px] mt-2 mb-3">
                        <div className="text-[18px] leading-6 font-medium text-[#32373d] mb-1">
                          {itemWorkshop.Ws_Title}
                        </div>

                        <div className="time flex  items-center justify-start">
                          <div className="day flex mr-5 items-center relative dot">
                            <i className="text-[16px] mr-1 text-[#939ca3] ic-calendar"></i>
                            <div className="text-[14px] leading-5 text-[#6a737a]">
                              Chủ Nhật, 31/03/2024
                            </div>
                          </div>
                          <div className="hour mr-5 items-center flex">
                            <i className="text-[16px] mr-1 text-[#939ca3] ic-line-time"></i>
                            <div className="text-[14px] leading-5 text-[#6a737a]">
                              {itemWorkshop.Ws_timeSt} - {itemWorkshop.Ws_timeE}
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
