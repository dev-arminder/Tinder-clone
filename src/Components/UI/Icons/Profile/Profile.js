import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import { Icon } from "@mui/material";

function Profile(props) {
  return (
    <IconButton>
      <PersonIcon {...props} />
    </IconButton>
  );
}

export default Profile;
