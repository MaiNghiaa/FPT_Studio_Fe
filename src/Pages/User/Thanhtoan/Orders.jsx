import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatCash } from "../../../Utils/utils"; // Sử dụng hàm formatCash nếu bạn có hàm này để định dạng tiền tệ

const Orders = () => {
  const [orderData, setOrderData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedOrderData = JSON.parse(localStorage.getItem("orderData"));
    if (storedOrderData) {
      setOrderData(storedOrderData);
    } else {
      // Nếu không có dữ liệu đơn hàng, điều hướng về trang chủ hoặc trang khác
      //   navigate("/");
      console.log("hehehe");
    }
  }, [navigate]);

  if (!orderData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-[#e5e7eb] pb-12 shadow-[0_1px_4px_rgba(10,10,10,.15)]">
      <div className="container py-5 px-[7] mx-auto sm:container md:container">
        <h1 className="text-xl font-semibold mb-4">Thông tin đơn hàng</h1>
        <p>
          <strong>Tên khách hàng:</strong> {orderData.customer_name}
        </p>
        <p>
          <strong>Email:</strong> {orderData.customer_email}
        </p>
        <p>
          <strong>Số điện thoại:</strong> {orderData.customer_phone}
        </p>
        <p>
          <strong>Tổng giá:</strong>{" "}
          {formatCash(orderData.total_price.toString())}đ
        </p>
        <p>
          <strong>Tổng số lượng:</strong> {orderData.totalQuantity}
        </p>
        <h2 className="text-lg font-semibold mt-4">Sản phẩm:</h2>
        <ul>
          {orderData.products.map((item, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-xl flex flex-col gap-2"
            >
              <p>
                <strong>Tên sản phẩm:</strong> {item.product_name}
              </p>
              <p>
                <strong>Rom:</strong> {item.rom}
              </p>
              <p>
                <strong>Màu:</strong> {item.ColorPick}
              </p>
              <p>
                <strong>Số lượng:</strong> {item.quantity}
              </p>
              <p>
                <strong>Giá mỗi sản phẩm:</strong>{" "}
                {formatCash(item.price_per_item.toString())}đ
              </p>
              <p>
                <strong>Tổng giá:</strong>{" "}
                {formatCash(item.TotalinProduct.toString())}đ
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Orders;
