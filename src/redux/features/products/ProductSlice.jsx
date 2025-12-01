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
    // setSearchTerms(state, action) {
    //   const term = action.payload.toLowerCase();
    //   state.searchText = term;
    //   // state.searchText = action.payload;
    //   state.filterData = state.product.filter((product) => {
    //     return (
    //       product.title.toLowerCase().includes(term) ||
    //       product.desc.toLowerCase().includes(term) ||
    //       product.price.includes(term)
    //     );
    //   });
    //   state.filterData = state.product.filter((singlePro) =>
    //     singlePro.title.toLowerCase().includes(state.searchText.toLowerCase())
    //   );
    // },
  },
});
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
