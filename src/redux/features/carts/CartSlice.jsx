import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  totleQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.product.find((item) => item.id === newItem.id);
      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.product.push({
          id: newItem.id,
          img: newItem.img,
          price: newItem.price,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totleQuantity++;
      state.totalPrice += newItem.price;
    },
    removeFromCard(state, action) {
      const id = action.payload;
      const findItem = state.product.find((item) => item.id === id);
      if (findItem) {
        state.totleQuantity -= findItem.quantity;
        state.totalPrice -= findItem.totalPrice;
        state.product = state.product.filter((product) => product.id !== id);
      }
    },
    increase(state, action) {
      const id = action.payload;
      const findItem = state.product.find((item) => item.id === id);
      if (findItem) {
        findItem.quantity++;
        findItem.totalPrice += findItem.price;
        state.totleQuantity++;
        state.totalPrice += findItem.price;
      }
    },
    decrease(state, action) {
      const id = action.payload;
      const findItem = state.product.find((item) => item.id === id);
      if (findItem.quantity > 1) {
        findItem.quantity--;
        findItem.totalPrice -= findItem.price;
        state.totleQuantity--;
        state.totalPrice -= findItem.price;
      }
    },
  },
});
export const { addToCart, removeFromCard, increase, decrease } =
  cartSlice.actions;
export default cartSlice.reducer;
