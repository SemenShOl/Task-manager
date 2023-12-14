import React from "react";
import moment from "moment";
import cl from "./CalendarField.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";
export const CalendarField = ({ startDay, activeDay }) => {
  const navigate = useNavigate();
  const day = startDay.clone();
  const calendar = [...Array(41)].map(() => day.add(1, "day").clone());
  calendar.unshift(startDay.clone());
  return (
    <div className={cl.wrapper}>
      <div className={cl.calendarWrapper}>
        {calendar.map((day, index) => {
          const isWeeknd =
            day.day() === 6 || day.day() === 0 ? cl.weeknd : null;
          const isCurrentDay =
            moment().format("DD.MM.YYYY") === day.format("DD.MM.YYYY");
          const isActiveMonth =
            activeDay.format("MMMM") === day.format("MMMM")
              ? null
              : cl.unActiveMonth;
          return (
            <div
              key={day.format("DD.MM.YYYY")}
              className={cn(cl.cell, isWeeknd, isActiveMonth)}
              onClick={() => navigate(`/todos/${day.format("DD.MM.YYYY")}`)}
            >
              <span>{day.date().valueOf("day")}</span>
              {isCurrentDay && <div className={cl.currentDay}></div>}
            </div>
          );
        })}
      </div>
    </div>
  );
};
