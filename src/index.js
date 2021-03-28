import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LanguageProvider } from "./contexts/LanguageContexts";
import { DefaultTimeProvider } from "./contexts/DefaultTimeContexts";
import "./styles/index.css";

ReactDOM.render(
  <LanguageProvider>
    <DefaultTimeProvider>
      <App />
    </DefaultTimeProvider>
  </LanguageProvider>,
  document.getElementById("root")
);
