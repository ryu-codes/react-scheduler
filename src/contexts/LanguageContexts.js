import React, { createContext, useState, useEffect } from "react";
export const LanguageContext = createContext();
export const LanguageProvider = (props) => {
  const initialLanguage =
    JSON.parse(window.localStorage.getItem("language")) || "jp";
  const [language, setLanguage] = useState(initialLanguage);
  const changeLanguage = (e) => setLanguage(e.target.value);
  useEffect(() => {
    window.localStorage.setItem("language", JSON.stringify(language));
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
