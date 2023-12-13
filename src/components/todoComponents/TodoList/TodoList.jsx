import React, { FC, useState } from "react";
import cl from "./TodoList.module.scss";
import Todo from "../Todo/Todo";
import { TaskInput } from "../TaskInput/TaskInput";
import { TodoObject, TodoProps } from "../Todo/Todo";

const TodoList = ({ todos, onChangeTodos, deleteTodo }) => {
  return (
    <div className={cl.wrapper}>
      {todos.map((todo) => (
        <Todo
          onChangeTodoComplete={() => onChangeTodos(todo.id)}
          onDeleteTodo={() => deleteTodo(todo.id)}
          key={todo.id}
          title={todo.title}
          id={todo.id}
          complteted={todo.complteted}
        />
      ))}
    </div>
  );
};

export default TodoList;
