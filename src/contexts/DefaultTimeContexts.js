import React, { createContext, useState, useEffect } from "react";
export const DefaultTimeContext = createContext();
export const DefaultTimeProvider = (props) => {
  const initialDefaultTime = JSON.parse(
    window.localStorage.getItem("defaultTime")
  ) || {
    startHour: "09",
    startMinute: "00",
    endHour: "18",
    endMinute: "00",
    minutesStep: "15",
  };
  const [defaultTime, setDefaultTime] = useState(initialDefaultTime);
  useEffect(() => {
    window.localStorage.setItem("defaultTime", JSON.stringify(defaultTime));
  }, [defaultTime]);

  return (
    <DefaultTimeContext.Provider value={{ defaultTime, setDefaultTime }}>
      {props.children}
    </DefaultTimeContext.Provider>
  );
};
