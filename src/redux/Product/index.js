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
  filterProductList: [],
  filterStatus: false,
};
export const getAllProduct = createAsyncThunk(
  "GET_ALL_PRODUCTS",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("product/filter");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const filterProduct = createAsyncThunk(
  "FILTER_PRODUCT",
  async (options, thunkAPI) => {
    try {
      let text = "";
      for (let i in options) {
        if (options[i] !== null) {
          text += `${i}=${options[i]}&`;
        }
      }
      let query = text.substring(0, text.length - 1);
      const response = await instance.get(`product/filter?${query}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const getSingleProduct = createAsyncThunk(
  "GET_SINGLE_PRODUCT",
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`product/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilter: (state) => {
      return { ...state, filterStatus: true };
    },
    setDefault: (state) => {
      return { ...state, filterStatus: false };
    },
  },
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

    //get single
    builder.addCase(getSingleProduct.pending, (state) => {
      return { ...state, loading: "loading" };
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      return { ...state, loading: "loaded", product: action.payload };
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      return { ...state, loading: "error", error: action.error };
    });

    //filter
    builder.addCase(filterProduct.pending, (state) => {
      return { ...state, loading: "loading" };
    });
    builder.addCase(filterProduct.fulfilled, (state, action) => {
      return { ...state, loading: "loaded", filterProductList: action.payload };
    });
    builder.addCase(filterProduct.rejected, (state, action) => {
      return { ...state, loading: "error", error: action.error };
    });
  },
});
export const { setDefault, setFilter } = productSlice.actions;
export const selectProducts = createSelector(
  (state) => ({
    productList: state.productState.productList,
    loading: state.productState.loading,
    error: state.productState.error,
    product: state.productState.product,
    filterProductList: state.productState.filterProductList,
  }),
  (state) => state
);

export default productSlice.reducer;
