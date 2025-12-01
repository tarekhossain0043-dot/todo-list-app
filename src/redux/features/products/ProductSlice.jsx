import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  searchText: "",
  filterData: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.product = action.payload;
    },
    setSearchTerms(state, action) {
      state.searchText = action.payload;
      state.filterData = state.product.filter((singlePro) =>
        singlePro.title.toLowerCase().includes(state.searchText.toLowerCase())
      );
    },
  },
});
export const { setProducts, setSearchTerms } = productSlice.actions;
export default productSlice.reducer;
