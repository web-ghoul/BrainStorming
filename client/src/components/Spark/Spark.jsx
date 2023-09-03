import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Spark.module.css";
import Head from "../Head/Head";
import FileBox from "../FileBox/FileBox";
import ImagesGridBox from "../ImagesGridBox/ImagesGridBox";
import SparkUser from "./SparkUser";

const Spark = ({ data }) => {
  return (
    <Box className={`grid jcs aic g10 ${styles.spark}`}>
      <SparkUser
        username={"webGhoul"}
        avatar={""}
        spark_date={data.createdAt}
        leader={false}
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
        {/* <Box className={`grid jcs aic g5 ${styles.spark_files}`}>
          {data.files &&
            data.files.map((file, i) => <FileBox key={i} title={file} />)}
        </Box> */}
      </Box>
    </Box>
  );
};

export default Spark;
