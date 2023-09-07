import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "./Spark.module.css";
import Head from "../Head/Head";
import ImagesGridBox from "../ImagesGridBox/ImagesGridBox";
import SparkUser from "./SparkUser";
import DocsGridBox from "../DocsGridBox/DocsGridBox";
import { ImageRounded, VideoLibraryRounded } from "@mui/icons-material";
import { useContext } from "react";
import { MyThemeContext } from "@/context/MyThemeContext";

const Spark = ({ data }) => {
  const { mode } = useContext(MyThemeContext);
  return (
    <Box
      className={`grid jcs aic g10 ${styles.spark}`}
      sx={{
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.primary.main
            : "transparent",
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "none"
            : "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
      }}
    >
      <SparkUser
        user={data.WrittenBy}
        spark_date={data.createdAt}
        spark_id={data._id}
      />
      <Box className={`grid jcs aic g20 ${styles.spark_data}`}>
        <Box className={`grid jcfs aic g10`}>
          <Head
            h={"h5"}
            align="left"
            title={data.Idea}
            color={mode === "dark" ? "#fff" : "#000"}
          />
          <Typography
            variant="h6"
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.black
                  : theme.palette.white,
            }}
            className={`fw500`}
          >
            {data.Description}
          </Typography>
        </Box>
        {data.Images && data.Images.length > 0 && (
          <Box className={`grid jcs aic g10`}>
            <Box className={`flex jcfs aic g5`}>
              <ImageRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.black
                      : theme.palette.white,
                }}
                variant="h6"
              >
                Images
              </Typography>
            </Box>
            <ImagesGridBox data={data.Images} />
          </Box>
        )}
        {data.Files && data.Files.length > 0 && (
          <Box>
            <Box className={`flex jcfs aic g5`}>
              <VideoLibraryRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? theme.palette.black
                      : theme.palette.white,
                }}
                variant="h6"
              >
                Documents
              </Typography>
            </Box>
            <DocsGridBox data={data.Files} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Spark;
