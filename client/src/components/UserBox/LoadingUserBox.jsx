import React from "react";
import styles from "./UserBox.module.css";
import { Box, Skeleton } from "@mui/material";

const LoadingUserBox = () => {
  return (
    <Box className={`flex jcsb aic g30 ${styles.user_box}`}>
      <Box className={`flex jcfs aic g10 ${styles.avatar_box}`}>
        <Box sx={{ position: "relative" }}>
          <Skeleton
            variant="rounded"
            className={`flex jcc aic ${styles.avatar}`}
          />
          <Skeleton
            variant="rectangular"
            className={`${styles.change_avatar_button}`}
          />
        </Box>
        <Box className={`grid jcfs aic ${styles.user_info}`}>
          <Skeleton variant="text" width={200} height={50} />
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingUserBox;
