import React, { useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContexts";

const FormattedDate = ({ date }) => {
  const { language } = useContext(LanguageContext);

  const formattedDate = (date) => {
    const monthFormat = date.getMonth() + 1;
    const dateFormat = date.getDate();
    const dayOfWeekFormat = date.getDay();
    const dayOfWeekStr = (language === "jp"
      ? ["日", "月", "火", "水", "木", "金", "土"]
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])[dayOfWeekFormat];
    const formattedDate =
      language === "jp"
        ? `${monthFormat}月${dateFormat}日(${dayOfWeekStr})`
        : `${monthFormat}/${dateFormat} (${dayOfWeekStr})`;
    return formattedDate;
  };
  return <div>{formattedDate(date)}</div>;
};

export default FormattedDate;
