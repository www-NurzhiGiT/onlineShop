import { createSlice } from "@reduxjs/toolkit";

const porductSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProductsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSaccess: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    fetchProductsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchProductsStart, fetchProductsSaccess, fetchProductsFail } =
  porductSlice.actions;
export default porductSlice.reducer;
