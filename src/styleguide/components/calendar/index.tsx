import React, { useState, useEffect } from "react";
import classNames from "classnames";
import {
  format,
  addMonths,
  subMonths,
  addDays,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay
} from "date-fns";

import css from "./index.module.scss";

import { IconLeft, IconRight } from "@icons/index";

type CalendarProps = {
  activeDate?: Date;
  emitSelectedDate: Function;
};

const Calendar = ({ activeDate, emitSelectedDate }: CalendarProps) => {
  useEffect(() => setSelectedDate(activeDate), [activeDate]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(
    activeDate ? activeDate : new Date()
  );

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const header = () => {
    return (
      <div className={css.calendarHeader}>
        <IconLeft
          className={css.calendarHeaderIcon}
          onClick={prevMonth}
          size={"2x"}
          width="0"
        />
        <div className={css.calendarHeaderText}>
          <span>{format(currentDate, "MMMM yyyy")}</span>
        </div>
        <IconRight
          className={css.calendarHeaderIcon}
          onClick={nextMonth}
          size={"2x"}
          width="0"
        />
      </div>
    );
  };

  const daysOfWeek = () => {
    const dateFormat = "ccc";
    const days = [];
    let startDate = startOfWeek(currentDate);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={css.calendarDaysNamesText} key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className={css.calendarDaysNamesContainer}>{days}</div>;
  };

  const onDateClick = day => {
    setSelectedDate(day);
    emitSelectedDate(day);
  };

  const cells = () => {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        let cloneDay = day;
        days.push(
          <div
            className={classNames(
              css.calendarDaysBtn,
              css.cell,
              !isSameMonth(day, monthStart)
                ? css.calendarDaysBtnDisabled
                : isSameDay(day, selectedDate)
                ? css.calendarDaysBtnSelected
                : ""
            )}
            key={day.toString()}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className={css.calendarDaysBtnNumber}>{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className={css.calendarDaysContainer} key={day.toString()}>
          {days}
        </div>
      );
      days = [];
    }
    return rows;
  };

  return (
    <div className={css.calendarContainer}>
      <>{header()}</>
      <>{daysOfWeek()}</>
      <>{cells()}</>
      <div className={css.slotsText}>Slots available</div>
    </div>
  );
};

export default Calendar;
