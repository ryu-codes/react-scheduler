import React, { useState, useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContexts";
import {
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";

import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

const HowToDialog = () => {
  const { language } = useContext(LanguageContext);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const dialogTitle = {
    jp: "使い方",
    en: "How to Use",
  };
  const dialogContentText = {
    jp: (
      <ol>
        <li>カレンダーからアポイント候補日をえらぶ。</li>
        <li>日程リストからアポイント時間の枠を調整する。</li>
        <li>COPYボタンをクリックして、メールなどに貼り付ける！</li>
      </ol>
    ),
    en: (
      <ol>
        <li>Choose dates to schedule an appointment from the calendar.</li>
        <li>Adjust your availability for each date in the list.</li>
        <li>Click the COPY button and paste it in email! (or anywhere)</li>
      </ol>
    ),
  };
  const closeButtonText = {
    jp: "閉じる",
    en: "CLOSE",
  };

  return (
    <div>
      <IconButton color="inherit" onClick={handleClickOpen}>
        <HelpOutlineIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="howTo-dialog-title"
      >
        <DialogTitle>{dialogTitle[language]}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContentText[language]}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {closeButtonText[language]}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default HowToDialog;
