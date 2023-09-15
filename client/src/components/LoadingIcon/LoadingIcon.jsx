import React from "react";
import { AutorenewRounded } from "@mui/icons-material";
import styles from "./LoadingIcon.module.css";

const LoadingIcon = ({ color }) => {
  return (
    <AutorenewRounded
      sx={{ color: color }}
      className={`${styles.loading_icon}`}
    />
  );
};

export default LoadingIcon;
