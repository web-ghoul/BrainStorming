import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import styles from "./Spark.module.css";
import Head from "../Head/Head";
import { AdminPanelSettings } from "@mui/icons-material";
import { Divider } from "@mui/material";
import FileBox from "../FileBox/FileBox";
import BottomNavigate from "../BottomNavigate/BottomNavigate";
import ImagesGridBox from "../ImagesGridBox/ImagesGridBox";

const Spark = ({ data }) => {
  return (
    <Box className={`grid jcs aic g10 ${styles.spark}`}>
      <Box className={`flex jcfs aic g10 ${styles.user}`}>
        <Box className={`flex jcc aic ${styles.avatar}`}>
          <Image alt="avatar" src={data.avatar} />
        </Box>
        <Box className={`grid jcfs aic`}>
          <Typography variant="h6" sx={{ lineHeight: "20px" }}>
            {data.username}
          </Typography>
          <Box className={`flex jcfs aic g5 ${styles.spark_date}`}>
            <Typography variant="subtitle1">05 Apr 2023</Typography>
            <AdminPanelSettings />
          </Box>
        </Box>
      </Box>
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
      <Divider />
      <BottomNavigate />
    </Box>
  );
};

export default Spark;
