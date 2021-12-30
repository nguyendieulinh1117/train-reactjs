import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/Product";
import catalogReducer from "../redux/Catalog";
import filterReducer from "../redux/Filter";
export const store = configureStore({
  reducer: {
    productState: productReducer,
    catalogState: catalogReducer,
    filterState: filterReducer,
  },
});
