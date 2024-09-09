import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    getCocktailStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getCocktailSuccess: (state, action) => {
      state.loading = false;
      state.list = action.payload;
    },
    getCocktailError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCocktailStart, getCocktailSuccess, getCocktailError } =
  contactSlice.actions;
export default contactSlice.reducer;
