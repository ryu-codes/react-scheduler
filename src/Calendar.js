import React from "react";
// import ReactCalendar from "rc-calendar";
// import "rc-calendar/assets/index.css";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./styles/calendar.css";

const Calendar = ({ addDate }) => {
  return <ReactCalendar locale="ja-JP" onChange={(e) => addDate(e)} />;
};

export default Calendar;
