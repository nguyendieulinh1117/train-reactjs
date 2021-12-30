import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import instance from "api/axiosClient";
const initialState = {
  loading: "idle",
  catalogList: [],
  error: "",
};
export const getAllCatalogs = createAsyncThunk(
  "GET_ALL_CATALOGS",
  async (_, thunkAPI) => {
    try {
      const response = await instance.get("catalog");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCatalogs.pending, (state) => {
      return { ...state, loading: "loading" };
    });
    builder.addCase(getAllCatalogs.fulfilled, (state, action) => {
      return { ...state, loading: "loaded", catalogList: action.payload };
    });
    builder.addCase(getAllCatalogs.rejected, (state, action) => {
      return { ...state, loading: "error", error: action.error };
    });
  },
});
export const selectCatalogs = createSelector(
  (state) => ({
    catalogList: state.catalogState.catalogList,
    loading: state.catalogState.loading,
  }),
  (state) => state
);
export default catalogSlice.reducer;
