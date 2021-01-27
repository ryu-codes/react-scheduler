import React, { useState } from "react";
import { AppBar, Paper, Grid } from "@material-ui/core";
import Calendar from "./Calendar";
import DateList from "./DateList";
import DateTextArea from "./DateTextArea";
import CopyButton from "./CopyButton";
import { v4 as uuidv4 } from "uuid";
import { formatDate } from "./helpers";
import defaultSettings from "./defaultSettings";

const App = () => {
  const [dates, setDates] = useState([]);
  const addDate = (newDate) => {
    // Check if newDate exists in dates. If true do not add it to dates.
    if (
      dates.some((element) => formatDate(element.date) === formatDate(newDate))
    ) {
      return;
    } else
      setDates([
        ...dates,
        {
          id: uuidv4(),
          date: newDate,
          startHour: defaultSettings.startHour,
          startMinute: defaultSettings.startMinute,
          endHour: defaultSettings.endHour,
          endMinute: defaultSettings.endMinute,
        },
      ]);
  };
  const updateTime = (
    dateId,
    newStartHour,
    newStartMinute,
    newEndHour,
    newEndMinute
  ) => {
    const updatedDates = dates.map((date) =>
      date.id === dateId
        ? {
            ...date,
            startHour: newStartHour,
            startMinute: newStartMinute,
            endHour: newEndHour,
            endMinute: newEndMinute,
          }
        : date
    );
    setDates(updatedDates);
  };
  const removeDate = (dateId) => {
    const updatedDates = dates.filter((date) => date.id !== dateId);
    setDates(updatedDates);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: "whitesmoke",
        minHeight: "100vh",
      }}
    >
      <AppBar
        color={"secondary"}
        position={"static"}
        style={{ height: "64px" }}
      ></AppBar>
      <Grid
        container
        spacing={1}
        justify="center"
        style={{ marginTop: "1rem", padding: 30 }}
      >
        <Grid item xs={0} sm={3}></Grid>
        <Grid item xs={12} sm={6} style={{ height: "35vh" }}>
          <Paper style={{ textAlign: "center", height: "100%" }}>
            <Calendar addDate={addDate} />
          </Paper>
        </Grid>
        <Grid item xs={0} sm={3}></Grid>

        <Grid item xs={12} sm={3} style={{ height: "10vh" }}>
          <Paper style={{ textAlign: "center", height: "100%" }}>
            <DateList
              dates={dates}
              removeDate={removeDate}
              updateTime={updateTime}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2} style={{ height: "10vh" }}>
          <Paper style={{ textAlign: "center", height: "100%" }}>
            <DateTextArea dates={dates} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1} style={{ height: "10vh" }}>
          <Paper style={{ textAlign: "center", height: "100%" }}>
            <CopyButton />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default App;
