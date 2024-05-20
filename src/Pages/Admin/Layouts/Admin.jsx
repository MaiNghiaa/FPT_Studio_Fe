import React, { useState } from "react";
import axios from "axios";

const Admin = () => {
  const [productName, setProductName] = useState("");
  const [typeId, setTypeId] = useState("");
  const [captionPrice, setCaptionPrice] = useState("");
  const [oldPrice, setOldPrice] = useState("");
  const [minRom, setMinRom] = useState("");
  const [colorDefault, setColorDefault] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_name", productName);
    formData.append("TypeId", typeId);
    formData.append("CaptionPrice", captionPrice);
    formData.append("OldPrice", oldPrice);
    formData.append("MinRom", minRom);
    formData.append("ColorDefault", colorDefault);
    formData.append("image", image);

    try {
      const response = await axios.post(
        "http://localhost:3000/product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Có lỗi xảy ra khi thêm sản phẩm");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-4">Thêm Sản Phẩm</h2>
        {message && <p className="text-green-500">{message}</p>}
        <div className="mb-4">
          <label className="block text-gray-700">Tên Sản Phẩm</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">TypeId</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded"
            value={typeId}
            onChange={(e) => setTypeId(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Giá</label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded"
            value={captionPrice}
            onChange={(e) => setCaptionPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Giá Cũ</label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded"
            value={oldPrice}
            onChange={(e) => setOldPrice(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Dung Lượng Tối Thiểu</label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded"
            value={minRom}
            onChange={(e) => setMinRom(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Màu Sắc Mặc Định</label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded"
            value={colorDefault}
            onChange={(e) => setColorDefault(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Hình Ảnh</label>
          <input
            type="file"
            className="mt-1 p-2 w-full border rounded"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Thêm Sản Phẩm
        </button>
      </form>
    </div>
  );
};

export default Admin;
