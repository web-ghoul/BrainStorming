"use client";

import { createContext, useState } from "react";

export const TeamModalContext = createContext();

export const TeamModalProvider = ({ children }) => {
  const [showAddNewTeamModal, setShowAddNewTeamModal] = useState(false);
  const [showJoinTeamModal, setShowJoinTeamModal] = useState(false);
  const handleToggleAddNewTeamModal = () => {
    setShowAddNewTeamModal(!showAddNewTeamModal);
  };
  const handleToggleJoinTeamModal = () => {
    setShowJoinTeamModal(!showJoinTeamModal);
  };
  return (
    <TeamModalContext.Provider
      value={{
        showJoinTeamModal,
        handleToggleJoinTeamModal,
        handleToggleAddNewTeamModal,
        showAddNewTeamModal,
      }}
    >
      {children}
    </TeamModalContext.Provider>
  );
};
