import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";
const initialState = {
  items: [],
  status: "loading",
};

export const fetchGetByDayTodos = createAsyncThunk(
  "todos/fetchGetByDayTodos",
  async (date) => {
    try {
      const { data } = await axios.get(`/todos/${date}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchRemoveTodo = createAsyncThunk(
  "todos/fetchRemoveTodo",
  async (id) => {
    console.log(id);
    try {
      const { data } = await axios.delete(`/todos/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAddTodo = createAsyncThunk(
  "todos/fetchAddTodo",
  async (todoFields) => {
    console.log(todoFields);
    try {
      const { data } = await axios.post(`/todos`, todoFields);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    clearTodos: (state) => {
      state.items = [];
      state.status = "loading";
    },
  },
  extraReducers: {
    // get by day
    [fetchGetByDayTodos.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchGetByDayTodos.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    },
    [fetchGetByDayTodos.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
    // remove
    [fetchRemoveTodo.pending]: (state) => {
      state.items = [];
      state.status = "loading";
    },
    [fetchRemoveTodo.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = "loaded";
    },
    [fetchRemoveTodo.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
    //add
    [fetchAddTodo.pending]: (state) => {
      state.status = "loading";
    },
    [fetchAddTodo.fulfilled]: (state, action) => {
      console.log("redux payload: ", action.payload);
      state.items.push(action.payload);
      state.status = "loaded";
    },
    [fetchAddTodo.rejected]: (state) => {
      state.items = [];
      state.status = "error";
    },
  },
});

export const todoReducer = todosSlice.reducer;
export const { clearTodos } = todosSlice.actions;
