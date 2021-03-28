import React, { useContext } from "react";
import FormDialog from "./FormDialog";
import HowToDialog from "./HowToDialog";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import { LanguageContext } from "./contexts/LanguageContexts";

const Navbar = ({ setPreSentence, resetToDefaultPresentence }) => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (val) => {
    changeLanguage(val);
    resetToDefaultPresentence(val);
  };

  const titleText = {
    jp: "アポ調整ツール",
    en: "When Is Good?",
  };

  return (
    <AppBar color={"primary"} position={"static"} style={{ height: "64px" }}>
      <Toolbar>
        <Typography style={{ flexGrow: 1 }}>{titleText[language]}</Typography>
        <Select
          value={language}
          onChange={(e) => {
            handleLanguageChange(e);
          }}
          style={{ color: "white" }}
        >
          <MenuItem value="jp">日本語</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
        <FormDialog
          setPreSentence={setPreSentence}
          resetToDefaultPresentence={resetToDefaultPresentence}
        />
        <HowToDialog />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
