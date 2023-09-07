"use client";
import React, { useContext } from "react";
import { Box, Modal, Typography } from "@mui/material";
import Form from "../Form/Form";
import { TeamModalContext } from "@/context/TeamModalContext";
import styles from "./Models.module.css";
import { Img } from "react-image";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
import { CameraAltRounded } from "@mui/icons-material";
const TeamModal = ({ type }) => {
  const {
    handleToggleJoinTeamModal,
    handleToggleAddNewTeamModal,
    handleToggleViewTeamImageModal,
    handleToggleChangeTeamImageModal,
    showAddNewTeamModal,
    showJoinTeamModal,
    viewTeamImageModal,
    showChangeTeamImageModal,
    teamImage,
  } = useContext(TeamModalContext);
  return type === "add_new_team" ? (
    <Modal
      open={showAddNewTeamModal}
      onClose={handleToggleAddNewTeamModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g10`}>
        <Form type="add_new_team" />
      </Box>
    </Modal>
  ) : type === "join_team" ? (
    <Modal
      open={showJoinTeamModal}
      onClose={handleToggleJoinTeamModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g10 `}>
        <Form type="join_team" />
      </Box>
    </Modal>
  ) : type === "change_team_image" ? (
    <Modal
      open={showChangeTeamImageModal}
      onClose={handleToggleChangeTeamImageModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g10 `}>
        <Form type="change_team_image" />
      </Box>
    </Modal>
  ) : (
    type === "view_team_image" && (
      <Modal
        open={viewTeamImageModal}
        onClose={handleToggleViewTeamImageModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={`grid jcs aic g30  ${styles.modal_box} ${styles.avatar_box}`}>
          <Img alt="team cover" src={teamImage} crossOrigin="anonymous" />
          <MainIconButton
            onClick={() => {
              handleToggleChangeTeamImageModal();
              handleToggleViewTeamImageModal();
            }}
            className={`${styles.change_avatar_button}`}
          >
            <CameraAltRounded />
            <Typography variant="h6">Change Team Image</Typography>
          </MainIconButton>
        </Box>
      </Modal>
    )
  );
};

export default TeamModal;
