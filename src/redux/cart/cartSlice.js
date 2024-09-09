import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.items.find(
        (item) => item.id == action.payload.id
      );

      if (!findProduct) {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    incQuantity: (state, action) => {
      const findProduct = state.items.find((item) => item.id == action.payload);
      if (findProduct) {
        findProduct.quantity += 1;
      }
    },
    decQuantity: (state, action) => {
      const findProduct = state.items.find((item) => item.id == action.payload);
      if (findProduct && findProduct.quantity > 1) {
        findProduct.quantity -= 1;
      }
    },
  },
});

export const { addToCart, incQuantity, decQuantity } = cartSlice.actions;
export default cartSlice.reducer;

// removeFromCart: (state, action) => {
//   state.items = state.items.filter((item) => item.id !== action.payload.id);
// },
// clearCart: (state) => {
//   state.items = [];
// },

// const existingItem = state.items.find(
//   (item) => item.id === action.payload.id
// );
// if (existingItem) {
//   existingItem.quantity += action.payload.quantity;
// } else {
//   state.items.push({ ...action.payload, quantity: 1 });
// }
