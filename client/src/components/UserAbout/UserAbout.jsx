import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./UserAbout.module.css";
import { Fade } from "react-awesome-reveal";

const UserAbout = () => {
  return (
    <Box className={`grid jcs aic g10`}>
      <Typography variant="h5">About</Typography>
      <Typography
        component={"p"}
        variant="h6"
        className={`fw500 flex jcfs aic ${styles.user_about_box}`}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum
      </Typography>
    </Box>
  );
};

export default UserAbout;
