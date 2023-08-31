"use client";

import { createContext, useState } from "react";

export const ProfileModalContext = createContext();

export const ProfileModalProvider = ({ children }) => {
  const [showChangeAvatarModal, setShowChangeAvatarModal] = useState(false);
  const [viewAvatarModal, setViewAvatarModal] = useState(false);
  const [showChangeProfileCoverModal, setShowChangeProfileCoverModal] = useState(
    false
  );
  const handleToggleChangeAvatarModal = () => {
    setShowChangeAvatarModal(!showChangeAvatarModal);
  };
  const handleToggleChangeProfileCoverModal = () => {
    setShowChangeProfileCoverModal(!showChangeProfileCoverModal);
  };
  const handleToggleViewAvatarModal = () => {
    setViewAvatarModal(!viewAvatarModal);
  };
  return (
    <ProfileModalContext.Provider
      value={{
        showChangeProfileCoverModal,
        showChangeAvatarModal,
        viewAvatarModal,
        handleToggleChangeAvatarModal,
        handleToggleChangeProfileCoverModal,
        handleToggleViewAvatarModal
      }}
    >
      {children}
    </ProfileModalContext.Provider>
  );
};
