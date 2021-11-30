import React from "react";
import ForumIcon from "@mui/icons-material/Forum";
import IconButton from "@mui/material/IconButton";

function Forum(props) {
  return (
    <IconButton>
      <ForumIcon {...props} />
    </IconButton>
  );
}

export default Forum;
