import React, { useState } from "react";
import TodoList from "../TodoList/TodoList";
import { TaskInput } from "../TaskInput/TaskInput";
import Todo from "../Todo/Todo";
import { TodoFilters } from "../TodoFilters/TodoFilters";
import { v1 } from "uuid";
import cl from "./TodoSection.module.scss";

export const TodoSection = () => {
  const [todos, setTodos] = useState([
    {
      id: v1(),
      title: "Купить хлеб",
      complteted: false,
    },
    {
      id: v1(),
      title: "Купить колбасы",
      complteted: false,
    },
  ]);
  const [filter, setFilter] = useState("all");

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

  const onChangeTodos = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, complteted: !todo.complteted } : todo
      )
    );
  };
  const addTodo = (text) =>
    text.trim() !== ""
      ? setTodos([
          ...todos,
          {
            id: v1(),
            title: text,
            complteted: false,
          },
        ])
      : undefined;

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  return (
    <div className={cl.wrapper}>
      {/* <h2>TodoList</h2> */}
      <TaskInput addTodo={addTodo} />
      <TodoList
        todos={filteredTodos}
        deleteTodo={deleteTodo}
        onChangeTodos={onChangeTodos}
      />
      <TodoFilters filter={filter} setFilter={setFilter} />
    </div>
  );
};
