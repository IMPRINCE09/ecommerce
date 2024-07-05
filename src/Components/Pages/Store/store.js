import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Storeslice";
import productReducer from "./Productslice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;
