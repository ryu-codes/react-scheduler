import React from "react";
import DateItem from "./DateItem";
import { Divider, List } from "@material-ui/core";

const DateList = ({ dates, removeDate, updateTime }) => {
  const sortedDates = dates.slice().sort((a, b) => a.date - b.date);
  if (dates.length)
    return (
      <List style={{ maxHeight: "100%", overflow: "auto", padding: "0" }}>
        {sortedDates.map((date, index) => (
          <React.Fragment key={date.id}>
            <DateItem
              id={date.id}
              date={date.date}
              key={date.id}
              removeDate={removeDate}
              updateTime={updateTime}
              startHour={date.startHour}
              startMinute={date.startMinute}
              endHour={date.endHour}
              endMinute={date.endMinute}
            />
            <Divider />
          </React.Fragment>
        ))}
      </List>
    );
  return null;
};

export default DateList;
