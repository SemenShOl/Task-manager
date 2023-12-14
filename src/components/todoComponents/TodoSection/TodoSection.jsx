import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import { TaskInput } from "../TaskInput/TaskInput";
import { TodoFilters } from "../TodoFilters/TodoFilters";
import cl from "./TodoSection.module.scss";
import { useDispatch } from "react-redux";
import { fetchRemoveTodo, fetchAddTodo } from "../../../redux/slices/todos";
import { useParams } from "react-router-dom";

export const TodoSection = ({ todos }) => {
  const [filter, setFilter] = useState("all");
  const params = useParams();
  const dispatch = useDispatch();
  console.log(todos);
  const filteredTodos = (() => {
    switch (filter) {
      case "active":
        return todos.filter((todo) => !todo.complteted);
      case "completed":
        return todos.filter((todo) => todo.complteted);
      default:
        return todos;
    }
  })();

  // const onChangeTodos = (id) => {
  //   setTodos(
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, complteted: !todo.complteted } : todo
  //     )
  //   );
  // };
  const addTodo = (text) =>
    text.trim() !== ""
      ? dispatch(
          fetchAddTodo({
            title: text,
            text: "",
            completed: false,
            date: params.date,
          })
        )
      : undefined;

  const deleteTodo = (id) => dispatch(fetchRemoveTodo(id));

  return (
    <div className={cl.wrapper}>
      {/* <h2>TodoList</h2> */}
      <TaskInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        // onChangeTodos={onChangeTodos}
      />
      <TodoFilters filter={filter} setFilter={setFilter} />
    </div>
  );
};
