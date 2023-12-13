import React from "react";
import cl from "./MainContainer.module.scss";
export const MainContainer = ({ children }) => {
  return <div className={cl.container}>{children}</div>;
};
