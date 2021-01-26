import React from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  TextField,
} from "@material-ui/core";
import { formatDate } from "./helpers";
import { Delete } from "@material-ui/icons";

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

  return (
    <ListItem>
      <ListItemText>{formatDate(date)}</ListItemText>
      <form noValidate>
        {/* StartHour */}
        <TextField
          id={id}
          select
          value={startHour}
          onChange={(e) =>
            updateTime(id, e.target.value, startMinute, endHour, endMinute)
          }
          SelectProps={{
            native: true,
            // TODO: Hide the downward arrow of select
            // style: {
            //   WebkitAppearance: "none",
            //   MozAppearance: "none",
            //   appearance: "none",
            // },
          }}
        >
          {hourOptions.map((op) => (
            <option value={op} key={op}>
              {op}
            </option>
          ))}
        </TextField>
        {/* StartMinute */}
        <TextField
          id={id}
          select
          label=""
          value={startMinute}
          // style={{ marginRight: "1rem" }}
          onChange={(e) =>
            updateTime(id, startHour, e.target.value, endHour, endMinute)
          }
          SelectProps={{
            native: true,
          }}
        >
          {minuteOptions.map((op) => (
            <option value={op} key={op}>
              {op}
            </option>
          ))}
        </TextField>
      </form>
      {/* TODO: Put dash between start and end */}
      <span style={{ fontSize: "2rem" }}>-</span>
      <form noValidate>
        {/* EndHour */}
        <TextField
          id={id}
          select
          value={endHour}
          onChange={(e) =>
            updateTime(id, startHour, startMinute, e.target.value, endMinute)
          }
          SelectProps={{
            native: true,
          }}
        >
          {hourOptions.map((op) => (
            <option value={op} key={op}>
              {op}
            </option>
          ))}
        </TextField>
        {/* EndMinute */}
        <TextField
          id={id}
          select
          label=""
          value={endMinute}
          onChange={(e) =>
            updateTime(id, startHour, startMinute, endHour, e.target.value)
          }
          SelectProps={{
            native: true,
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
        <IconButton aria-label="Delete" onClick={() => removeDate(id)}>
          <Delete />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default DateItem;
