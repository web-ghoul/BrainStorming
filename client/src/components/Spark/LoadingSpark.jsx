import React from "react";
import { Box, Skeleton } from "@mui/material";
import styles from "./Spark.module.css";
import LoadingSparkHead from "./LoadingSparkHead";

const LoadingSpark = () => {
  return (
    <Box
      className={`grid jcs aic g10 ${styles.spark} ${styles.loading_spark}`}
    >
      <LoadingSparkHead />
      <Box className={`grid jcs aic g10 ${styles.spark_data}`}>
        <Box className={`grid jcfs aic g10 ${styles.loading_spark_data}`}>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
        </Box>
      </Box>
    </Box>
  );
};

export default LoadingSpark;
