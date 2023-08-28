import { IconButton, Typography } from "@mui/material";
import React from "react";
import styles from "./AuthButton.module.css";
import { useTheme } from "@mui/material/styles";

const AuthButton = ({ icon, iconColor, text }) => {
  return (
    <IconButton
      sx={{ color: iconColor }}
      className={`flex jcc aic g10 ${styles.auth_button}`}
    >
      {icon}
      {/* <Typography variant='h6' sx={{color:theme.palette.black}}>{text}</Typography> */}
    </IconButton>
  );
};

export default AuthButton;
