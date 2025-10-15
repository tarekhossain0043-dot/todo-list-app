import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductCart from "./ProductCart";

export default function ProductList() {
  // Product List
  const products = [
    {
      id: 1,
      names: "phone",
      price: 100,
      image: "product-7.jpg",
    },
    {
      id: 2,
      names: "laptop",
      price: 1900,
      image: "product-1.jpg",
    },
    {
      id: 3,
      names: "Iphone-14Pro max",
      price: 1100,
      image: "product-6.jpg",
    },
    {
      id: 4,
      names: "tab",
      price: 400,
      image: "product-4.jpg",
    },
    {
      id: 5,
      names: "Television",
      price: 300,
      image: "product-2.jpg",
    },
    {
      id: 6,
      names: "bike",
      price: 2000,
      image: "product-3.jpg",
    },
    {
      id: 7,
      names: "skuter",
      price: 700,
      image: "product-5.jpg",
    },
  ];

  // dispatch
  const { dispatch } = useCart();
  return (
    <div className="bg-gray-50 shadow-sm shadow-gray-200 px-5 py-7">
      <h2 className="text-center font-bold text-2xl uppercase tracking-[2px] text-green-500 mb-7">
        <Link to="/cart">🛒</Link> Products
      </h2>
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <ProductCart
              key={product.id}
              product={product}
              onLoad={() => dispatch({ type: "ADD_ITEM", payload: product })}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
