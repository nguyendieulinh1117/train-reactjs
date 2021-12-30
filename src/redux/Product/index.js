import instance from "../../api/axiosClient";
import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  loading: "idle",
  error: "",
  product: {},
};
export const getAllProduct = createAsyncThunk(
  "GET_ALL_PRODUCTS",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("product");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //get all
    builder.addCase(getAllProduct.pending, (state) => {
      return { ...state, loading: "loading" };
    });
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      return { ...state, loading: "loaded", productList: action.payload };
    });
    builder.addCase(getAllProduct.rejected, (state, action) => {
      return { ...state, loading: "error", error: action.error };
    });
  },
});
export const selectProducts = createSelector(
  (state) => ({
    productList: state.productState.productList,
    loading: state.productState.loading,
    error: state.productState.error,
    product: state.productState.product,
  }),
  (state) => state
);

export default productSlice.reducer;
