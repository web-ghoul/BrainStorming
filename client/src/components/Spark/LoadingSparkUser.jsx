import {
  AdminPanelSettings,
  Delete,
  MoreVertRounded,
  Person,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Skeleton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Spark.module.css";

const LoadingSparkUser = () => {
  return (
    <Box className={`flex jcsb aic g30 ${styles.user}`}>
      <Box className={`flex jcfs aic g10 `}>
        <Box className={`flex jcc aic ${styles.avatar}`}>
          <Skeleton variant="circular" width={400} height={400} />
        </Box>
        <Box className={`grid jcfs aic`}>
          <Skeleton variant="text" height={25} width={100} />
          <Box className={`flex jcfs aic g5 ${styles.spark_date}`}>
            <Skeleton variant="text" height={25} width={200} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingSparkUser;
