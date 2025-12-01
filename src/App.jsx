import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import FilteredProduct from "./components/FilteredProduct";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import OrderSucc from "./components/OrderSucc";
import About from "./pages/About";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OrderConfirmation from "./pages/OrderConfirmation";
import Shop from "./pages/Shop";

import { useSelector } from "react-redux";
import Product_Details from "./components/Product_Details";
function App() {
  const [orderData, serOderData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const productNumber = useSelector((state) => state.cart.product);
  return (
    <>
      <Navbar
        productNumber={productNumber}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product_Details />} />
        <Route
          path="/order-confirmation"
          element={<OrderConfirmation orderData={orderData} />}
        />
        <Route
          path="/checkout"
          element={<CheckOut serOderData={serOderData} />}
        />
        <Route path="/successOrder" element={<OrderSucc />} />
        <Route
          path="/filterProduct"
          element={<FilteredProduct searchTerm={searchTerm} />}
        />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
