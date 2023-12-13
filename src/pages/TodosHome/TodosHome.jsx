import React from "react";
import { TodoSection } from "../../components/todoComponents/TodoSection/TodoSection";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { Header } from "../../components";
export const TodosHome = () => {
  return (
    <MainContainer>
      <Header />
      <TodoSection />
    </MainContainer>
  );
};
