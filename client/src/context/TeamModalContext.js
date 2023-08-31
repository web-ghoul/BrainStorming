"use client";

import { createContext, useState } from "react";

export const TeamModalContext = createContext();

export const TeamModalProvider = ({ children }) => {
  const [showAddNewTeamModal, setShowAddNewTeamModal] = useState(false);
  const [showJoinTeamModal, setShowJoinTeamModal] = useState(false);
  const [teamId, setTeamId] = useState(null);
  const handleToggleAddNewTeamModal = () => {
    setShowAddNewTeamModal(!showAddNewTeamModal);
  };
  const handleToggleJoinTeamModal = () => {
    setShowJoinTeamModal(!showJoinTeamModal);
  };
  return (
    <TeamModalContext.Provider
      value={{
        handleToggleJoinTeamModal,
        handleToggleAddNewTeamModal,
        showAddNewTeamModal,
        showJoinTeamModal,
        teamId,
        setTeamId
      }}
    >
      {children}
    </TeamModalContext.Provider>
  );
};
