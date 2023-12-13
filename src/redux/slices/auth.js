import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";
const initialState = {
  data: null,
  status: "loading",
};

export const fetchUserLogin = createAsyncThunk(
  "auth/fetchUserLogin",
  async (params) => {
    const { data } = await axios.post("/auth/login", params);
    return data;
  }
);

export const fetchUserRegister = createAsyncThunk(
  "auth/fetchUserRegistr",
  async (params) => {
    const res = await axios.post("/auth/register", params);
    console.log("response data:" + res);
    return res.data;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const { data } = await axios.post("/auth/me");
  return data;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
      window.localStorage.removeItem("token");
    },
  },
  extraReducers: {
    //Login
    [fetchUserLogin.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchUserLogin.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchUserLogin.rejected]: (state) => {
      state.data = null;
      state.status = "errorLogin";
    },

    //Registr
    [fetchUserRegister.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchUserRegister.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchUserRegister.rejected]: (state) => {
      state.status = "errorRegistr";
    },

    //Self auth
    [fetchAuthMe.pending]: (state) => {
      state.data = null;
      state.status = "loading";
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.status = "loaded";
    },
    [fetchAuthMe.rejected]: (state) => {
      state.data = null;
      state.status = "errorAuthMe";
    },
  },
});

export const authReducer = authSlice.reducer;
export const { logout } = authSlice.actions;
