import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import avatar from "../../../public/images/avatar4.jpg";
import { CameraAltRounded, EditRounded } from "@mui/icons-material";
import styles from "./UserBox.module.css";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
import { useContext } from "react";
import { ProfileModalContext } from "@/context/ProfileModalContext";
import { useSelector } from "react-redux";

const UserBox = ({ isUser }) => {
  const {
    handleToggleChangeAvatarModal,
    handleToggleViewAvatarModal,
    handleToggleEditProfileModal,
  } = useContext(ProfileModalContext);
  const { userData } = useSelector((state) => state.user);
  return (
    userData && (
      <Box className={`flex jcsb aic g30 ${styles.user_box}`}>
        <Box className={`flex jcfs aic g10 ${styles.avatar_box}`}>
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{ backgroundImage: `url(${userData.Image})` }}
              className={`flex jcc aic ${styles.avatar}`}
              onClick={handleToggleViewAvatarModal}
            >
              <Box className={`overlay ${styles.overlay}`}></Box>
            </Box>
            {isUser && (
              <MainIconButton
                onClick={handleToggleChangeAvatarModal}
                className={`${styles.change_avatar_button}`}
              >
                <CameraAltRounded />
              </MainIconButton>
            )}
          </Box>
          <Box className={`grid jcfs aic ${styles.user_info}`}>
            <Typography variant="h4">{userData.Name}</Typography>
            <Typography
              sx={{ color: (theme) => !userData.Bio && theme.palette.gray }}
              variant="h6"
              className={`fw500`}
            >
              {userData.Bio ? userData.Bio : "Write your bio..."}
            </Typography>
          </Box>
        </Box>
        <Box className={`flex jcfe aic ${styles.edit_button}`}>
          {isUser && (
            <MainIconButton onClick={handleToggleEditProfileModal}>
              <EditRounded />
              <Typography variant="h6">Edit Profile</Typography>
            </MainIconButton>
          )}
        </Box>
      </Box>
    )
  );
};

export default UserBox;
