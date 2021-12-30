import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  catalog: null,
  price: null,
  priceMax: null,
  priceMin: null,
  order: null,
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCatalog: (state, action) => {
      return { ...state, catalog: action.payload };
    },
    setPrice: (state, action) => {
      return {
        ...state,
        priceMax: action.payload.priceMax,
        priceMin: action.payload.priceMin,
      };
    },
    sortPrice: (state, action) => {
      return { ...state, order: action.payload, price: true };
    },
    setDefaultF: (state) => {
      return {
        ...state,
        catalog: null,
        price: null,
        priceMax: null,
        priceMin: null,
        order: null,
      };
    },
  },
});
export const { setCatalog, setDefaultF, setPrice, sortPrice } =
  filterSlice.actions;
export default filterSlice.reducer;
