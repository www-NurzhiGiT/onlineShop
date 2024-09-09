import { createSlice } from "@reduxjs/toolkit";

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    item: [],
  },
  reducers: {
    addItem: (state, action) => {
      const findProduct = state.item.find((x) => x.id == action.payload.id);

      if (!findProduct) {
        state.item.push(action.payload);
      }
    },
    removeWish: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeWish } = wishSlice.actions;
export default wishSlice.reducer;
