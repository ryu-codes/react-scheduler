import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LanguageProvider } from "./contexts/LanguageContexts";

ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById("root")
);
