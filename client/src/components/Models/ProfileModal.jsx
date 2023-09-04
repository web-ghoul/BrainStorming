import { ProfileModalContext } from "@/context/ProfileModalContext";
import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import Form from "../Form/Form";
import { Img } from "react-image";
import styles from "./Models.module.css";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
import { CameraAltRounded } from "@mui/icons-material";

const ProfileModal = ({ img, type }) => {
  const {
    showChangeProfileCoverModal,
    showChangeAvatarModal,
    viewAvatarModal,
    viewCoverModal,
    showEditProfileModal,
    handleToggleChangeAvatarModal,
    handleToggleChangeProfileCoverModal,
    handleToggleViewAvatarModal,
    handleToggleViewCoverModal,
    handleToggleEditProfileModal
  } = useContext(ProfileModalContext);
  return type === "change_avatar" ? (
    <Modal
      open={showChangeAvatarModal}
      onClose={handleToggleChangeAvatarModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g10`}>
        <Form type="change_avatar" />
      </Box>
    </Modal>
  ) : type === "change_cover" ? (
    <Modal
      open={showChangeProfileCoverModal}
      onClose={handleToggleChangeProfileCoverModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g10 `}>
        <Form type="change_cover" />
      </Box>
    </Modal>
  ): type === "edit_profile" ? (
    <Modal
      open={showEditProfileModal}
      onClose={handleToggleEditProfileModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g10 ${styles.edit_profile_box}`}>
        <Form type="edit_profile" />
      </Box>
    </Modal>
  ) : type === "view_avatar" ? (
    <Modal
      open={viewAvatarModal}
      onClose={handleToggleViewAvatarModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g30 ${styles.avatar_box}`}>
        <Img alt="avatar" src={img} crossOrigin="anonymous" />
        <MainIconButton
          onClick={() => {
            handleToggleChangeAvatarModal();
            handleToggleViewAvatarModal();
          }}
          className={`${styles.change_avatar_button}`}
        >
          <CameraAltRounded />
          <Typography variant="h6">Change Avatar</Typography>
        </MainIconButton>
      </Box>
    </Modal>
  ) : (
    <Modal
      open={viewCoverModal}
      onClose={handleToggleViewCoverModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g30 ${styles.avatar_box}`}>
        <Img alt="cover" src={img} crossOrigin="anonymous" />
        <MainIconButton
          onClick={() => {
            handleToggleChangeProfileCoverModal();
            handleToggleViewCoverModal();
          }}
        >
          <CameraAltRounded />
          <Typography variant="h6">Change Cover</Typography>
        </MainIconButton>
      </Box>
    </Modal>
  );
};

export default ProfileModal;
