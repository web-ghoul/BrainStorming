"use client";
import React, { useContext } from "react";
import { Box, Modal } from "@mui/material";
import Form from "../Form/Form";
import { TeamModalContext } from "@/context/TeamModalContext";

const TeamModal = ({ type }) => {
  const {
    showJoinTeamModal,
    handleToggleJoinTeamModal,
    handleToggleAddNewTeamModal,
    showAddNewTeamModal,
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
  ) : (
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
  );
};

export default TeamModal;
