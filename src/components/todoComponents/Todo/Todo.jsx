import React, { useState } from "react";
import cl from "./Todo.module.scss";
import { Checkbox } from "../UI/Checkbox/Checkbox";
import cn from "classnames";
import { RxCross2 } from "react-icons/rx";
const Todo = ({
  title,
  id,
  complteted,
  onChangeTodoComplete,
  onDeleteTodo,
}) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className={complteted ? cn(cl.wrapper, cl.active) : cl.wrapper}>
      <div className={cl.checkAndPWrapper}>
        <Checkbox onClick={onChangeTodoComplete} completed={complteted} />
        <p className={cl.description}>{title}</p>
      </div>
      <RxCross2 className={cl.cross} onClick={onDeleteTodo} />
    </div>
  );
};

export default Todo;
