import React from "react";
import { Button } from "@material-ui/core";
import FileCopyOutlinedIcon from "@material-ui/icons/FileCopyOutlined";

const CopyButton = () => {
  const copyToClipboard = () => {
    const el = document.getElementById("textToCopy");
    el.select();
    document.execCommand("copy");
  };

  return (
    <div>
      <Button
        onClick={() => copyToClipboard()}
        variant="contained"
        color="primary"
        startIcon={<FileCopyOutlinedIcon />}
        fullWidth
        disableElevation
      >
        COPY
      </Button>
    </div>
  );
};

export default CopyButton;
