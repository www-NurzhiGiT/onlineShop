import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count/countSlice";
import productReducer from "./products/productSlice";
import wishReducer from "./wishList/wishSlice";
import cartReducer from "./cart/cartSlice";
import contactReducer from "./contact/contactSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productReducer,
    wishlist: wishReducer,
    carts: cartReducer,
    cocktail: contactReducer,
  },
});

export default store;
