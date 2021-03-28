import React, { useState, useContext } from "react";
import { LanguageContext } from "./contexts/LanguageContexts";
import { DefaultTimeContext } from "./contexts/DefaultTimeContexts";
import {
  IconButton,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
  DialogTitle,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";

const FormDialog = ({ setPreSentence, resetToDefaultPresentence }) => {
  const { language } = useContext(LanguageContext);
  const { defaultTime, setDefaultTime } = useContext(DefaultTimeContext);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleReset = () => {
    resetToDefaultPresentence();
    window.localStorage.removeItem("defaultTime");
    setDefaultTime({
      startHour: "09",
      startMinute: "00",
      endHour: "18",
      endMinute: "00",
      minutesStep: "15",
    });
    setOpen(false);
  };

  const dialogTitle = {
    jp:
      "日程調整の前に入れる文章とデフォルトのアポイント時間を変更できます。変更内容はブラウザに保存されます。",
    en:
      "You can change the sentence and the default appointment times as you like. Changes will be saved in your browser.",
  };
  const textFieldLabel = {
    jp: "文章を入力",
    en: "Input texts",
  };
  const startHourLabel = {
    jp: "開始時間",
    en: "Start hour",
  };
  const endHourLabel = {
    jp: "終了時間",
    en: "End hour",
  };
  const minutesStepsLabel = {
    jp: "間隔(分)",
    en: "Steps(min)",
  };
  // prettier-ignore
  const hourOptions = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"];
  const minuteStepOptions = ["05", "10", "15", "30", "60"];

  const closeButtonText = {
    jp: "閉じる",
    en: "CLOSE",
  };
  const resetButtonText = {
    jp: "リセット",
    en: "RESET",
  };

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
        <DialogTitle>{dialogTitle[language]}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="dialog-text-field"
            label={textFieldLabel[language]}
            onChange={(e) => setPreSentence(e.target.value)}
            fullWidth
            type="text"
            maxLength="5"
          />
          <TextField
            label={startHourLabel[language]}
            select
            defaultValue={defaultTime["startHour"]}
            margin="dense"
            onChange={(e) =>
              setDefaultTime({ ...defaultTime, startHour: e.target.value })
            }
            SelectProps={{ native: true }}
            style={{ width: "72px" }}
          >
            {hourOptions.slice(0, defaultTime["endHour"]).map((op) => (
              <option value={op} key={op}>
                {op}
              </option>
            ))}
          </TextField>
          <TextField
            label={endHourLabel[language]}
            select
            defaultValue={defaultTime["endHour"]}
            margin="dense"
            onChange={(e) =>
              setDefaultTime({ ...defaultTime, endHour: e.target.value })
            }
            SelectProps={{ native: true }}
            style={{ width: "72px" }}
          >
            {hourOptions
              .slice(Number(defaultTime["startHour"]) + 1)
              .map((op) => (
                <option value={op} key={op}>
                  {op}
                </option>
              ))}
          </TextField>
          <TextField
            label={minutesStepsLabel[language]}
            select
            defaultValue={defaultTime["minutesStep"]}
            margin="dense"
            onChange={(e) => {
              setDefaultTime({ ...defaultTime, minutesStep: e.target.value });
            }}
            SelectProps={{ native: true }}
            style={{ width: "72px" }}
          >
            {minuteStepOptions.map((step) => (
              <option value={step} key={step}>
                {step}
              </option>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleReset}>{resetButtonText[language]}</Button>
          <Button type="submit" onClick={handleClose} color="primary">
            {closeButtonText[language]}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FormDialog;
