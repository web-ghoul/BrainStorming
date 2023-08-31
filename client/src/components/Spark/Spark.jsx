import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Spark.module.css";
import Head from "../Head/Head";
import { Divider } from "@mui/material";
import FileBox from "../FileBox/FileBox";
import ImagesGridBox from "../ImagesGridBox/ImagesGridBox";
import SparkUser from "./SparkUser";

const Spark = ({ data }) => {
  return (
    <Box className={`grid jcs aic g10 ${styles.spark}`}>
      <SparkUser
        username={"webGhoul"}
        avatar={data.avatar}
        spark_date={data.spark_date}
        leader={false}
      />
      <Box className={`grid jcs aic g10 ${styles.spark_data}`}>
        <Box className={`grid jcfs aic g10`}>
          <Head h={"h5"} align="left" title={data.drop} color={"#333"} />
          <Typography variant="h6" className={`fw500`}>
            Spark's Drops @mui/icons-material includes the 2,100+ official
            Material Icons converted to SvgIcon components. It depends on
            @mui/material, which requires Emotion packages. Use one of the
            following commands to install it:
          </Typography>
        </Box>
        {data.images && data.images.length > 0 && (
          <ImagesGridBox data={data.images} />
        )}
        <Box className={`grid jcs aic g5 ${styles.spark_files}`}>
          {data.files &&
            data.files.map((file, i) => <FileBox key={i} title={file} />)}
        </Box>
      </Box>
    </Box>
  );
};

export default Spark;
