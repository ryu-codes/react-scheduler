import React, { useContext } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { formatDate } from "./helpers";
import { LanguageContext } from "./contexts/LanguageContexts";
import { Delete, Schedule } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    "& .MuiInput-underline:before": {
      borderBottomWidth: "0px",
    },
    "& .MuiSelect-select.MuiSelect-select": {
      padding: "2px",
    },
    "& .MuiInputBase-input": {
      height: "1rem",
    },
  },
});

const iconComponent = () => {
  return null;
};

const DateItem = ({
  date,
  id,
  removeDate,
  updateTime,
  startHour,
  startMinute,
  endHour,
  endMinute,
}) => {
  const hourOptions = [
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
  ];
  const minuteOptions = ["00", "15", "30", "45"];

  const classes = useStyles();

  const { language } = useContext(LanguageContext);

  const formattedDate = (date) => {
    const [monthFormat, dateFormat, dayOfWeekFormat] = formatDate(date);
    const dayOfWeekStr = (language === "jp"
      ? ["日", "月", "火", "水", "木", "金", "土"]
      : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])[dayOfWeekFormat];
    const formattedDate =
      language === "jp"
        ? `${monthFormat}月${dateFormat}日(${dayOfWeekStr})`
        : `${monthFormat}/${dateFormat} (${dayOfWeekStr})`;
    return formattedDate;
  };

  return (
    <ListItem style={{ height: "30px" }}>
      <ListItemText>{formattedDate(date)}</ListItemText>
      <IconButton size="small" disableFocusRipple>
        <Schedule style={{ fontSize: "1rem" }} />
      </IconButton>
      <form noValidate>
        {/* StartHour */}
        <TextField
          id={id}
          className={classes.root}
          select
          value={startHour}
          onChange={(e) =>
            updateTime(id, e.target.value, startMinute, endHour, endMinute)
          }
          SelectProps={{
            native: true,
            // Hiding the downward arrow of select
            IconComponent: iconComponent,
          }}
        >
          {hourOptions.map((op) => (
            <option value={op} key={op}>
              {op}
            </option>
          ))}
        </TextField>
        <span>:</span>
        {/* StartMinute */}
        <TextField
          id={id}
          className={classes.root}
          select
          label=""
          value={startMinute}
          onChange={(e) =>
            updateTime(id, startHour, e.target.value, endHour, endMinute)
          }
          SelectProps={{
            native: true,
            IconComponent: iconComponent,
          }}
        >
          {minuteOptions.map((op) => (
            <option value={op} key={op}>
              {op}
            </option>
          ))}
        </TextField>
      </form>
      {/* Dash between start and end */}
      <span style={{ fontSize: "1rem" }}>-</span>
      <IconButton size="small" disableFocusRipple>
        <Schedule style={{ fontSize: "1rem" }} />
      </IconButton>
      <form noValidate>
        {/* EndHour */}
        <TextField
          id={id}
          className={classes.root}
          select
          value={endHour}
          onChange={(e) =>
            updateTime(id, startHour, startMinute, e.target.value, endMinute)
          }
          SelectProps={{
            native: true,
            IconComponent: iconComponent,
          }}
        >
          {hourOptions.map((op) => (
            <option value={op} key={op}>
              {op}
            </option>
          ))}
        </TextField>
        <span>:</span>
        {/* EndMinute */}
        <TextField
          id={id}
          className={classes.root}
          select
          label=""
          value={endMinute}
          onChange={(e) =>
            updateTime(id, startHour, startMinute, endHour, e.target.value)
          }
          SelectProps={{
            native: true,
            IconComponent: iconComponent,
          }}
        >
          {minuteOptions.map((op) => (
            <option value={op} key={op}>
              {op}
            </option>
          ))}
        </TextField>
      </form>
      <ListItemSecondaryAction>
        <IconButton
          aria-label="Delete"
          onClick={() => removeDate(id)}
          size="small"
        >
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default DateItem;
