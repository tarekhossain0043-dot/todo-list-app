import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/carts/CartSlice";
import productSlice from "../features/products/ProductSlice";

const store = configureStore({
  reducer: {
    product: productSlice,
    cart: cartSlice,
  },
});

export default store;
