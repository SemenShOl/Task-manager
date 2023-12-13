import { FC, useState } from "react";
import cl from "./Checkbox.module.scss";
import cn from "classnames";
import Checkmark from "../../icons/Checkmark";
import { CSSProperties } from "react";

export const Checkbox = ({ style, onClick, completed }) => {
  return (
    <div style={style} className={cl.wrapper} onClick={onClick}>
      <div className={cl.square}>
        <Checkmark
          className={completed ? cn(cl.checkMark, cl.active) : cl.checkMark}
        />
      </div>
    </div>
  );
};
