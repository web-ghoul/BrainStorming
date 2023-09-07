import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./UserInfo.module.css";
import { useSelector } from "react-redux";
import LoadingUserInfo from "./LoadingUserInfo";

const UserInfo = ({ title }) => {
  const { userData, isLoading } = useSelector((state) => state.user);
  return !isLoading ? (
    <Box className={`grid jcs aic g10`} >
      <Typography variant="h5">{title}</Typography>
      {title.toLowerCase() === "about" ? (
        <Typography
          component={"p"}
          variant="h6"
          className={`fw500 flex jcfs aic ${styles.user_info_box}`}
          sx={{
            color: (theme) => !userData.About && theme.palette.gray,
          }}
        >
          {userData.About ? userData.About : "Write a Brief..."}
        </Typography>
      ) : (
        <Typography
          component={"p"}
          variant="h6"
          className={`fw500 flex jcfs aic ${styles.user_info_box}`}
          sx={{
            color: (theme) => !userData.Bio && theme.palette.gray,
          }}
        >
          {userData.Bio ? userData.Bio : "Write a Bio..."}
        </Typography>
      )}
    </Box>
  ) : (
    <LoadingUserInfo title={title} />
  );
};

export default UserInfo;
