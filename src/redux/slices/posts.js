import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";
export const fetchGetPosts = createAsyncThunk(
  "posts/fetchGetPosts",
  async () => {
    const { data } = await axios.get("/posts");
    return data;
  }
);

export const fetchRemovePosts = createAsyncThunk(
  "posts/fetchRemovePosts",
  async (id) => {
    const { data } = await axios.delete(`/posts/${id}`);
    return data;
  }
);

const initialState = {
  posts: {
    items: [],
    status: "loading",
  },
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    clearPosts: (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    },
  },
  extraReducers: {
    // Получение статей
    [fetchGetPosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    },
    [fetchGetPosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    },
    [fetchGetPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    },
    //Удаление статьи
    [fetchRemovePosts.pending]: (state) => {
      state.posts.items = [];
      state.posts.status = "loading";
    },
    [fetchRemovePosts.fulfilled]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.status = "loaded";
    },
    [fetchGetPosts.rejected]: (state) => {
      state.posts.items = [];
      state.posts.status = "error";
    },
  },
});

export const postReducer = postSlice.reducer;
export const { clearPosts } = postSlice.actions;
