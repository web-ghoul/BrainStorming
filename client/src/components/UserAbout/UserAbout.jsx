import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./UserAbout.module.css";
import { Fade } from "react-awesome-reveal";
import { useSelector } from "react-redux";

const UserAbout = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    userData && (
      <Box className={`grid jcs aic g10`}>
        <Typography variant="h5">About</Typography>
        <Typography
          component={"p"}
          variant="h6"
          className={`fw500 flex jcfs aic ${styles.user_about_box}`}
          sx={{ color: (theme) => !userData.About && theme.palette.gray }}
        >
          {userData.About ? userData.About : "Write a Brief..."}
        </Typography>
      </Box>
    )
  );
};

export default UserAbout;
