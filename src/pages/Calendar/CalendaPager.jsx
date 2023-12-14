import React from "react";
import { Calendar } from "./../../components/Calendar/Calendar";
import { MainContainer } from "../../components/MainContainer/MainContainer";
import { Header } from "../../components";
export const CalendarPage = () => {
  return (
    <MainContainer>
      <Header />
      <div
        style={{
          marginLeft: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Calendar />
      </div>
    </MainContainer>
  );
};
