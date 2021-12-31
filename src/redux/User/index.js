import instance from "api/axiosClient";
import { toast } from "react-toastify";

import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
const initialState = {
  userList: [],
  currentUser: {},
  loading: "idle",
  error: "",
};
// register
export const register = createAsyncThunk("REGISTER", async (body, thunkAPI) => {
  try {
    let { data } = await instance.post(`auth/register`, body);
    toast.success("Sign up successfully", {
      position: "top-center",
      autoClose: 2000,
    });
    return data;
  } catch (error) {
    toast.error(error.response.data.message, {
      position: "top-center",
      autoClose: 2000,
    });
    return thunkAPI.rejectWithValue({ error: error.response.data.message });
  }
});
//login
export const login = createAsyncThunk("LOGIN", async (body, thunkAPI) => {
  try {
    let { data } = await instance.post(`auth/login`, body);

    return data;
  } catch (error) {
    toast.error(error.response.data, {
      position: "top-center",
      autoClose: 2000,
    });
    return thunkAPI.rejectWithValue({ error: error.response.data });
  }
});
//login remember me
export const loginSave = createAsyncThunk(
  "LOGIN_SAVE",
  async (body, thunkAPI) => {
    try {
      let { data } = await instance.post(`auth/login`, body);
      localStorage.setItem("token", JSON.stringify(data.accessToken));

      return data;
    } catch (error) {
      toast.error(error.response.data, {
        position: "top-center",
        autoClose: 2000,
      });
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

// get user
export const fetchGetUser = createAsyncThunk("USER", async (_, thunkAPI) => {
  try {
    const response = await instance.get("user/");
    return await response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      return { ...state, currentUser: {} };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      return { ...state, loading: "login", currentUser: action.payload };
    });
    builder.addCase(login.rejected, (state, action) => {
      return { ...state, loading: "error", error: action.payload.error };
    });
    builder.addCase(loginSave.fulfilled, (state, action) => {
      return { ...state, loading: "login", currentUser: action.payload };
    });
    builder.addCase(loginSave.rejected, (state, action) => {
      return { ...state, loading: "error", error: action.payload.error };
    });
    builder.addCase(fetchGetUser.fulfilled, (state, action) => {
      state.userList = action.payload;
      state.loading = "loaded";
    });
  },
});
export const { logout } = userSlice.actions;
export const selectUser = createSelector(
  (state) => ({
    userList: state.userState.userList,
    currentUser: state.userState.currentUser,
    loading: state.userState.loading,
    error: state.userState.error,
  }),
  (state) => state
);
export default userSlice.reducer;
