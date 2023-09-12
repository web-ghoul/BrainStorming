"use client";

import { createContext, useState } from "react";

export const TeamModalContext = createContext();

export const TeamModalProvider = ({ children }) => {
  const [showAddNewTeamModal, setShowAddNewTeamModal] = useState(false);
  const [showJoinTeamModal, setShowJoinTeamModal] = useState(false);
  const [showLeaveTeamModal, setShowLeaveTeamModal] = useState(false);
  const [showChangeTeamImageModal, setShowChangeTeamImageModal] = useState(
    false
  );
  const [viewTeamImageModal, setViewTeamImageModal] = useState(false);
  const [teamImage, setTeamImage] = useState("");
  const [teamId, setTeamId] = useState(null);
  const handleToggleLeaveTeamModal =()=>{
    setShowLeaveTeamModal(!showLeaveTeamModal)
  }

  const handleToggleAddNewTeamModal = () => {
    setShowAddNewTeamModal(!showAddNewTeamModal);
  };
  const handleToggleJoinTeamModal = () => {
    setShowJoinTeamModal(!showJoinTeamModal);
  };
  const handleToggleViewTeamImageModal = () => {
    setViewTeamImageModal(!viewTeamImageModal);
  };
  const handleSetTeamImage = (img) => {
    setTeamImage(img);
  };
  const handleToggleChangeTeamImageModal = () => {
    setShowChangeTeamImageModal(!showChangeTeamImageModal);
  };
  return (
    <TeamModalContext.Provider
      value={{
        handleToggleJoinTeamModal,
        handleToggleAddNewTeamModal,
        handleToggleViewTeamImageModal,
        handleToggleChangeTeamImageModal,
        handleSetTeamImage,
        handleToggleLeaveTeamModal,
        showAddNewTeamModal,
        showJoinTeamModal,
        showLeaveTeamModal,
        viewTeamImageModal,
        showChangeTeamImageModal,
        teamId,
        teamImage,
        setTeamId,
      }}
    >
      {children}
    </TeamModalContext.Provider>
  );
};
