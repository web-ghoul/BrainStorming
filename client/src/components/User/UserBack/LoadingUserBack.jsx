import React from "react";
import { Box, Skeleton } from "@mui/material";
import styles from "./UserBack.module.css";

const LoadingUserBack = () => {
  return (
    <Box className={`${styles.user_back}`}>
      <Skeleton variant="rectangular" className={`${styles.cover}`} />
    </Box>
  );
};

export default LoadingUserBack;
