import { createSlice } from "@reduxjs/toolkit";
import query from "query-string";
let parsed = query.parse(window.location.search);
const initialState = {
  catalog:
    query.parse(window.location.search).catalog === undefined
      ? null
      : query.parse(window.location.search).catalog,
  price:
    query.parse(window.location.search).price === undefined
      ? null
      : query.parse(window.location.search).price,
  priceMax:
    query.parse(window.location.search).priceMax === undefined
      ? null
      : query.parse(window.location.search).priceMax,
  priceMin:
    query.parse(window.location.search).priceMin === undefined
      ? null
      : query.parse(window.location.search).priceMin,
  order:
    query.parse(window.location.search).order === undefined
      ? null
      : query.parse(window.location.search).order,
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
