import React, { useState, useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContexts";
import IconButton from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

const FormDialog = ({
  preSentence,
  changePreSentence,
  resetToDefaultPresentence,
}) => {
  const { language } = useContext(LanguageContext);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleReset = () => {
    resetToDefaultPresentence();
    setOpen(false);
  };

  const dialogContentText =
    language === "jp"
      ? "日程調整の前に入れる文章を変更できます。"
      : "Change the sentence as you like.";
  const textFieldLabel = language === "jp" ? "文章を入力" : "Type a sentence";

  // const dialogContentText = <Text tid="dialogContentText" />;
  // const textFieldLabel = <Text tid="textFieldLabel" />;

  return (
    <div>
      <IconButton color="inherit" onClick={handleClickOpen}>
        <SettingsIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogContent>
          <DialogContentText>{dialogContentText}</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="dialog-text-field"
            label={textFieldLabel}
            onChange={(e) => changePreSentence(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReset}>Reset</Button>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
