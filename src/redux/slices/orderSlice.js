// // slices/orderSlice.js
// import { createSlice } from "@reduxjs/toolkit";

// const initialOrderState = {
//   checkoutItems: [],
//   checkoutTotal: 0,
//   checkoutQuantity: 0,
// };

// const orderSlice = createSlice({
//   name: "order",
//   initialState: initialOrderState,
//   reducers: {
//     setCheckoutData(state, action) {
//       const { products, totalQuantity, totalPrice } = action.payload;
//       state.checkoutItems = products;
//       state.checkoutTotal = totalPrice;
//       state.checkoutQuantity = totalQuantity;
//     },

//     clearOrderData: () => initialOrderState,
//   },
// });

// export const { setCheckoutData, clearOrderData } = orderSlice.actions;
// export default orderSlice.reducer;
