import React, { useContext } from "react";
import { formatDate } from "./helpers";
import { LanguageContext } from "./contexts/LanguageContexts";

const DateTextArea = ({ dates, preSentence }) => {
  const sortedDates = dates.slice().sort((a, b) => a.date - b.date);
  const { language } = useContext(LanguageContext);

  const formattedDate = (date) => {
    const [monthFormat, dateFormat, dayOfWeekFormat] = formatDate(date);
    const dayOfWeekStr = (language === "jp"
      ? ["日", "月", "火", "水", "木", "金", "土"]
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])[dayOfWeekFormat];
    const formattedDate =
      language === "jp"
        ? `${monthFormat}月${dateFormat}日(${dayOfWeekStr})`
        : `${monthFormat}/${dateFormat} (${dayOfWeekStr})`;
    return formattedDate;
  };
  // TODO: Add customizable list style for bullet
  // prettier-ignore
  const strDate = sortedDates.map(
    (date) => `・${formattedDate(date.date)} ${date.startHour}:${date.startMinute} - ${date.endHour}:${date.endMinute}`
  );
  const textAreaDate = strDate.join("\n");

  return (
    <textarea
      // placeholder={preSentence}
      name=""
      id="textToCopy"
      cols="30"
      rows="10"
      style={{ height: "95%", width: "98%", border: "none" }}
      value={`${preSentence}\n${textAreaDate}`}
      readOnly
    ></textarea>
  );
};

export default DateTextArea;
