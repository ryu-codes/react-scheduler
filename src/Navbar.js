import React, { useContext } from "react";
import { languageOptions } from "./languages";
import FormDialog from "./FormDialog";
import {
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
} from "@material-ui/core";
import { LanguageContext } from "./contexts/LanguageContexts";
import LanguageIcon from "@material-ui/icons/Language";

const Navbar = ({
  preSentence,
  changePreSentence,
  resetToDefaultPresentence,
}) => {
  const { language, changeLanguage } = useContext(LanguageContext);
  // const handleLanguageChange = (e) => languageChange(e.target.value);

  const handleLanguageChange = (val) => {
    changeLanguage(val);
    resetToDefaultPresentence();
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
          {/* {Object.entries(languageOptions).map(([id, name]) => (
            <MenuItem key={id} value={id}>
              {name}
            </MenuItem>
          ))} */}
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
