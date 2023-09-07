import React from "react";
import {Box,Typography} from "@mui/material";
import styles from "./Spark.module.css";

const LoadingSpark = () => {
  return (
    <Box className={`grid jcs aic g10 ${styles.spark}`}>
      <SparkUser
        user={data.WrittenBy}
        spark_date={data.createdAt}
        spark_id={data._id}
      />
      <Box className={`grid jcs aic g10 ${styles.spark_data}`}>
        <Box className={`grid jcfs aic g10`}>
          <Head h={"h5"} align="left" title={data.Idea} color={"#333"} />
          <Typography variant="h6" className={`fw500`}>
            {data.Description}
          </Typography>
        </Box>
        {data.Images && data.Images.length > 0 && (
          <ImagesGridBox data={data.Images} />
        )}

      </Box>
    </Box>
  );
};

export default LoadingSpark;