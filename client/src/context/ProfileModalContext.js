"use client";

import { createContext, useState } from "react";

export const ProfileModalContext = createContext();

export const ProfileModalProvider = ({ children }) => {
  const [showChangeAvatarModal, setShowChangeAvatarModal] = useState(false);
  const [showChangeProfileCoverModal, setShowChangeProfileCoverModal] = useState(
    false
  );
  const handleToggleChangeAvatarModal = () => {
    setShowChangeAvatarModal(!showChangeAvatarModal);
  };
  const handleToggleChangeProfileCoverModal = () => {
    setShowChangeProfileCoverModal(!showChangeProfileCoverModal);
  };
  return (
    <ProfileModalContext.Provider
      value={{
        showChangeProfileCoverModal,
        showChangeAvatarModal,
        handleToggleChangeAvatarModal,
        handleToggleChangeProfileCoverModal,
      }}
    >
      {children}
    </ProfileModalContext.Provider>
  );
};
