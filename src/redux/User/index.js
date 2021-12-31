import instance from "api/axiosClient";
import { toast } from "react-toastify";

import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
const initialState = {
  currentUser: {},
  loading: "idle",
  error: "",
};
//login
export const loginSave = createAsyncThunk("LOGIN", async (body, thunkAPI) => {
  try {
    let { data } = await instance.post(`auth/login`, body);
    localStorage.setItem("token", JSON.stringify(data.accessToken));
    toast.success("Login successfully", {
      position: "top-center",
      autoClose: 2000,
    });
    return data;
  } catch (error) {
    toast.error(error.response.data, {
      position: "top-center",
      autoClose: 2000,
    });
    return thunkAPI.rejectWithValue({ error: error.response.data });
  }
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginSave.fulfilled, (state, action) => {
      return { ...state, loading: "login", currentUser: action.payload };
    });
    builder.addCase(loginSave.rejected, (state, action) => {
      return { ...state, loading: "error", error: action.payload.error };
    });
  },
});
export const selectUser = createSelector(
  (state) => ({
    currentUser: state.userState.currentUser,
    loading: state.userState.loading,
    error: state.userState.error,
  }),
  (state) => state
);
export default userSlice.reducer;
