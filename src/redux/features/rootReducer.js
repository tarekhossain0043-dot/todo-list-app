import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./carts/CartSlice";
import productSlice from "./products/ProductSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  product: productSlice,
});
export default rootReducer;
