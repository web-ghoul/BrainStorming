import { CameraAltRounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import styles from "./UserBack.module.css";
import backImg from "../../../public/images/al_sami_a_surreal_minimalism_in_the_style_of_Jacek_Yerka_80533981-9b76-46a3-aa05-1aead00b7efe.png";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
import { useContext } from "react";
import { ProfileModalContext } from "@/context/ProfileModalContext";

const UserBack = () => {
  const { handleToggleChangeProfileCoverModal } = useContext(
    ProfileModalContext
  );
  return (
    <Box
      className={`${styles.user_back}`}
      sx={{ backgroundImage: `url(${backImg.src})` }}
    >
      <MainIconButton
        onClick={handleToggleChangeProfileCoverModal}
        className={`${styles.change_cover_button}`}
      >
        <CameraAltRounded />
        <Typography variant="h6">Change Cover</Typography>
      </MainIconButton>
    </Box>
  );
};

export default UserBack;
