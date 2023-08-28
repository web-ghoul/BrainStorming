import { ProfileModalContext } from "@/context/ProfileModalContext";
import { Box, Modal } from "@mui/material";
import React from "react";
import { useContext } from "react";
import Form from "../Form/Form";

const ProfileModal = ({type}) => {
  const {
    showChangeProfileCoverModal,
    showChangeAvatarModal,
    handleToggleChangeAvatarModal,
    handleToggleChangeProfileCoverModal
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
  ) : (
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
  );
};

export default ProfileModal;
