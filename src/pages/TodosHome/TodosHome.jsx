import React, { useEffect, useState } from "react";
import { TodoSection } from "../../components/todoComponents/TodoSection/TodoSection";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { Header } from "../../components";
import { useParams } from "react-router-dom";
import axios from "../../axios.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetByDayTodos } from "../../redux/slices/todos.js";

export const TodosHome = () => {
  const params = useParams();
  const todos = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetByDayTodos(params.date));
  }, []);
  return (
    <MainContainer>
      <Header />
      <TodoSection todos={todos} />
    </MainContainer>
  );
};
