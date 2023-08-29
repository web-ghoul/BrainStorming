import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import avatar from "../../../public/images/avatar4.jpg";
import {
  CameraAltRounded,
} from "@mui/icons-material";
import styles from "./UserBox.module.css";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
import { useContext } from "react";
import { ProfileModalContext } from "@/context/ProfileModalContext";

const UserBox = () => {
  const {handleToggleChangeAvatarModal} = useContext(ProfileModalContext)
  return (
    <Box className={`flex jcsb aic g30 ${styles.user_box}`}>
      <Box className={`flex jcfs aic g10 ${styles.avatar_box}`}>
        <Box sx={{position:"relative"}}>
          <Box className={`flex jcc aic ${styles.avatar}`}>
            <Image alt="avatar" src={avatar} />
          </Box>
          <MainIconButton onClick={handleToggleChangeAvatarModal} className={`${styles.change_avatar_button}`}>
            <CameraAltRounded />
          </MainIconButton>
        </Box>
        <Box className={`grid jcfs aic ${styles.user_info}`}>
          <Typography variant="h4">webGhoul</Typography>
          <Typography variant="h6" className={`fw500`}>
            I am Frontend Developer
          </Typography>
        </Box>
      </Box>
      {/* <Box className={`flex jcfe aic g10`}>
        <MainButton>Like</MainButton>
        <MainIconButton>
          <AddToPhotosRounded />
          <Typography variant="h6">Follow</Typography>
        </MainIconButton>
        <MainIconButton>
          <MessageRounded />
          <Typography variant="h6">Message</Typography>
        </MainIconButton>
      </Box> */}
    </Box>
  );
};

export default UserBox;
