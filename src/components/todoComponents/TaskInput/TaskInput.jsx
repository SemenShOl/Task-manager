import { FC, useState } from "react";
import { Input } from "../UI/Input/Input";
import { Button } from "../UI/Button/Button";
import cl from "./TaskInput.module.scss";

export const TaskInput = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const onAddTodo = () => {
    addTodo(value);
    setValue("");
  };

  return (
    <div className={cl.wrapper}>
      <Input
        style={{ marginBottom: 10 }}
        value={value}
        setValue={setValue}
        onKeyDownClick={onAddTodo}
      />
      <Button
        disabled={value.trim() === ""}
        className={cl.btn}
        onClick={onAddTodo}
      >
        Добавить задачу
      </Button>
    </div>
  );
};
