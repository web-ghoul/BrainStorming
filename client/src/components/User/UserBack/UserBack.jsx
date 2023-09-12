import { CameraAltRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./UserBack.module.css";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
import { useContext } from "react";
import { ProfileModalContext } from "@/context/ProfileModalContext";
import { useSelector } from "react-redux";
import LoadingUserBack from "./LoadingUserBack";

const UserBack = ({isUser}) => {
  const {
    handleToggleChangeProfileCoverModal,
    handleToggleViewCoverModal,
  } = useContext(ProfileModalContext);
  const { userData,isLoading } = useSelector((state) => state.user);
  return (
    !isLoading ? (
      <Box className={`${styles.user_back}`}>
        <Box
          sx={{ backgroundImage: `url(${userData.BackgroundImage})` }}
          className={`${styles.cover}`}
        />
        <Box
          className={`overlay ${styles.overlay}`}
          onClick={handleToggleViewCoverModal}
        ></Box>

        {isUser && (
          <MainIconButton
            onClick={handleToggleChangeProfileCoverModal}
            className={`${styles.change_cover_button}`}
          >
            <CameraAltRounded />
            <Typography variant="h6">Change Cover</Typography>
          </MainIconButton>
        )}
      </Box>
    ):(<LoadingUserBack/>)
  );
};

export default UserBack;
