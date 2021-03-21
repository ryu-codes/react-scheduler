import React, { useContext } from "react";
// import ReactCalendar from "rc-calendar";
// import "rc-calendar/assets/index.css";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { LanguageContext } from "./contexts/LanguageContexts";
import "./styles/calendar.css";

const locales = {
  jp: "ja-JP",
  en: "en-US",
};

const Calendar = ({ addDate }) => {
  const { language } = useContext(LanguageContext);
  return (
    <ReactCalendar
      locale={locales[language]}
      onChange={(e) => addDate(e)}
      showFixedNumberOfWeeks
      minDetail="month"
      next2Label={null}
      prev2Label={null}
    />
  );
};

export default Calendar;
