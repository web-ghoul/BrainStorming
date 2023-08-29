import { ProfileModalContext } from "@/context/ProfileModalContext";
import { Box, Modal } from "@mui/material";
import React from "react";
import { useContext } from "react";
import Form from "../Form/Form";
import { Img } from "react-image";
import styles from "./ProfileModal.module.css";

const ProfileModal = ({ img, type }) => {
  const {
    showChangeProfileCoverModal,
    showChangeAvatarModal,
    viewAvatarModal,
    handleToggleChangeAvatarModal,
    handleToggleChangeProfileCoverModal,
    handleToggleViewAvatarModal,
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
  ) : (
    <Modal
      open={viewAvatarModal}
      onClose={handleToggleViewAvatarModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic ${styles.avatar_box}`}>
        <Img alt="avatar" src={img} crossOrigin="anonymous" />
      </Box>
    </Modal>
  );
};

export default ProfileModal;
