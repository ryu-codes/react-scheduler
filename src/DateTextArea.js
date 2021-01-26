import React from "react";
import { formatDate } from "./helpers";

const DateTextArea = ({ dates }) => {
  const sortedDates = dates.slice().sort((a, b) => a.date - b.date);
  // TODO: Add customizable list style for bullet
  // prettier-ignore
  const formattedDate = sortedDates.map(
    (date) => `・${formatDate(date.date)} ${date.startHour}:${date.startMinute} - ${date.endHour}:${date.endMinute}`
  );
  const strDate = formattedDate.join("\n");

  return (
    <textarea
      placeholder="TextArea"
      name=""
      id="textToCopy"
      cols="30"
      rows="10"
      style={{ height: "95%", width: "98%", border: "none" }}
      value={strDate}
      readOnly
    ></textarea>
  );
};

export default DateTextArea;
