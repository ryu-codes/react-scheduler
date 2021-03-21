import React, { createContext, useState, useEffect, useContext } from "react";
import { languageOptions, dictionaryList } from "../languages";

export const LanguageContext = createContext({
  language: "jp",
  dictionary: dictionaryList.jp,
});
export const LanguageProvider = ({ children }) => {
  const initialLanguage = window.localStorage.getItem("lang") || "jp";
  const [language, setLanguage] = useState(initialLanguage);
  const provider = {
    language,
    dictionary: dictionaryList[language],
    languageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : "en";
      setLanguage(newLanguage);
      window.localStorage.setItem("lang", newLanguage);
    },
  };
  // const changeLanguage = (e) => setLanguage(e.target.value);
  // useEffect(() => {
  //   window.localStorage.setItem("language", JSON.stringify(language));
  // }, [language]);
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};
export function Text({ tid }) {
  const languageContext = useContext(LanguageContext);
  return languageContext.dictionary[tid] || tid;
}
