import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./UserAbout.module.css";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";
import LoadingUserAbout from "./LoadingUserAbout";

const UserAbout = ({about}) => {
  return (
    about ? (
      <Box className={`grid jcs aic g10`}>
        <Typography variant="h5">About</Typography>
        <Typography
          component={"p"}
          variant="h6"
          className={`fw500 flex jcfs aic ${styles.user_about_box}`}
          sx={{ color: (theme) => !userData.About && theme.palette.gray }}
        >
          {about ? about : "Write a Brief..."}
        </Typography>
      </Box>
    ):(<LoadingUserAbout/>)
  );
};

export default UserAbout;
