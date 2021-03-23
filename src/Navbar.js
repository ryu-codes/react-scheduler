import React, { useContext } from "react";
import FormDialog from "./FormDialog";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import { LanguageContext } from "./contexts/LanguageContexts";

const Navbar = ({
  preSentence,
  changePreSentence,
  resetToDefaultPresentence,
}) => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (val) => {
    changeLanguage(val);
    resetToDefaultPresentence(val);
  };

  return (
    <AppBar color={"secondary"} position={"static"} style={{ height: "64px" }}>
      <Toolbar>
        <Typography style={{ flexGrow: 1 }}>When are you available?</Typography>
        <Select
          value={language}
          onChange={handleLanguageChange}
          style={{ color: "white" }}
        >
          <MenuItem value="jp">日本語</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
        <FormDialog
          preSentence={preSentence}
          changePreSentence={changePreSentence}
          resetToDefaultPresentence={resetToDefaultPresentence}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
