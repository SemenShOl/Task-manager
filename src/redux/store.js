import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./slices/posts";
import { authReducer } from "./slices/auth";
import { todoReducer } from "./slices/todos";
const store = configureStore({
  reducer: {
    posts: postReducer,
    auth: authReducer,
    todos: todoReducer,
  },
});

export default store;
