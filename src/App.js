import React, { useState, useContext, useEffect } from "react";
import { LanguageContext } from "./contexts/LanguageContexts";
import { Paper, Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Navbar from "./Navbar";
import Calendar from "./Calendar";
import DateList from "./DateList";
import DateTextArea from "./DateTextArea";
import CopyButton from "./CopyButton";
import { v4 as uuidv4 } from "uuid";
import defaultSettings from "./defaultSettings";

const App = () => {
  const { language } = useContext(LanguageContext);

  const [dates, setDates] = useState([]);

  const defaultPreSentence = {
    jp: "下記のうちご都合のよろしいお時間はございますでしょうか。",
    en: "Would you be availble in any of the timeslots below?",
  };

  const initialPreSentence =
    JSON.parse(window.localStorage.getItem("preSentence")) ||
    defaultPreSentence[language];
  const [preSentence, setPreSentence] = useState(initialPreSentence);
  const changePreSentence = (newPreSentence) => {
    setPreSentence(newPreSentence);
  };
  useEffect(() => {
    window.localStorage.setItem("preSentence", JSON.stringify(preSentence));
  }, [preSentence]);

  const addDate = (newDate) => {
    // Check if newDate exists in dates. If true do not add it to dates.
    if (dates.some((element) => String(element.date) === String(newDate))) {
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

  const resetToDefaultPresentence = (e) => {
    window.localStorage.removeItem("preSentence");
    if (e === undefined) {
      setPreSentence(defaultPreSentence[language]);
      return;
    }
    setPreSentence(defaultPreSentence[e.target.value]);
  };

  const desktopBrowserSize = useMediaQuery("(min-width:600px)");

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        backgroundColor: "whitesmoke",
        minHeight: "100vh",
      }}
    >
      <Navbar
        preSentence={preSentence}
        changePreSentence={changePreSentence}
        resetToDefaultPresentence={resetToDefaultPresentence}
      />

      <Grid
        container
        spacing={1}
        justify="center"
        style={{ marginTop: "1rem" }}
      >
        <Grid item xs={12} sm={4} md={3} lg={2}>
          <Calendar addDate={addDate} />
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={4}>
          {desktopBrowserSize ? (
            <Paper style={{ textAlign: "center", height: "240px" }}>
              <DateList
                dates={dates}
                removeDate={removeDate}
                updateTime={updateTime}
                style={{ height: "20px" }}
              />
            </Paper>
          ) : (
            <Paper style={{ textAlign: "center", height: "120px" }}>
              <DateList
                dates={dates}
                removeDate={removeDate}
                updateTime={updateTime}
                style={{ height: "20px" }}
              />
            </Paper>
          )}

          <Paper
            style={{
              textAlign: "center",
              height: "94px",
              marginTop: "0.5rem",
            }}
          >
            <DateTextArea dates={dates} preSentence={preSentence} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={1} justify="center">
        <Grid item xs={12} sm={8} md={6}>
          <CopyButton />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default App;
