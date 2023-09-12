import React from "react";
import { Box, Skeleton } from "@mui/material";
import styles from "./TeamBox.module.css";

const LoadingTeamBox = () => {
  return (
    <Box
      className={`grid jcs aic ${styles.room}`}
    >
      <Box
        className={`flex jcc aic ${styles.room_image_box}`}
      >
        <Skeleton variant="rectangular" height={"100%"} width={"100%"} />
      </Box>
      <Box className={`grid jcs aic g20 ${styles.room_data}`}>
        <Box className={`grid jcc aic`}>
          <Skeleton variant="text" height={30} width={250} />
        </Box>
        <Box className={`grid jcc aic ${styles.room_button}`}>
          <Skeleton variant="rectangular" height={40} width={150} />
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingTeamBox;
