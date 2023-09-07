import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import styles from "./UserInfo.module.css";

const LoadingUserAbout = ({title}) => {
  return (
    <Box className={`grid jcs aic g10`}>
      <Typography variant="h5">{title}</Typography>
      <Skeleton
        variant="rectangular"
        height={200}
        className={`fw500 flex jcfs aic ${styles.user_info_box}`}
      />
    </Box>
  );
};

export default LoadingUserAbout;
