import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/Product";
export const store = configureStore({
  reducer: {
    productState: productReducer,
  },
});
