import { Route, Routes } from "react-router-dom";
import Cart from "./component/Cart";
import ProductList from "./component/ProductList";
import { CartProvider } from "./context/CartContext";
export default function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  );
}
