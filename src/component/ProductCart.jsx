import { useState } from "react";

export default function ProductCart({ product, onLoad }) {
  const [message, setMessage] = useState("");

  const imgUrl = new URL(`../assets/${product.image}`, import.meta.url).href;
  return (
    <div className="bg-gray-50 shadow-sm border-t-gray-300 border-t-[2px] w-full max-w-[350px] h-full transition-all ease-linear hover:shadow-md">
      <img
        src={imgUrl}
        alt="product-img"
        className="w-full max-h-['200px'] bg-gray-100 object-cover mb-4"
      />
      <div className="px-4 py-2 shadow-sm shadow-gray-100">
        <h4 className="mb-3 text-[25px] font-semibold capitalize cursor-pointer hover:text-green-500 font-primary">
          {product.names}
        </h4>
        <span className="text-[20px] text-black font-bold">
          {product.price}
        </span>
        <button
          onClick={onLoad}
          className="px-8 py-4 bg-gray-100 shadow-sm shadow-gray-200 hover:bg-gray-200 text-black capitalize cursor-pointer transition-all ease-in-out"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
