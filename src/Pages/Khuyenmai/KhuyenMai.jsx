import React from "react";
import "./KhuyenMai.css"; // Import file CSS để định dạng

export default function KhuyenMai() {
  return (
    <div className="flex justify-center items-center p-10 flex-col">
      {" "}
      {/* Sử dụng lớp CSS để thiết lập hình nền */}
      <img
        src={require("../../assets/ErrorUpdate/Update.gif")}
        alt=""
        className="fullscreen-bg__img"
      />
      <div className="text-[30px] ">Đang cập nhật</div>{" "}
      {/* Hiển thị dòng chữ */}
    </div>
  );
}
