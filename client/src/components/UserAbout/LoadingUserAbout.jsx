import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import styles from "./UserAbout.module.css";

const LoadingUserAbout = () => {
  return (
    <Box className={`grid jcs aic g10`}>
      <Typography variant="h5">About</Typography>
      <Skeleton
        variant="rectangular"
        height={200}
        className={`fw500 flex jcfs aic ${styles.user_about_box}`}
      />
    </Box>
  );
};

export default LoadingUserAbout;
