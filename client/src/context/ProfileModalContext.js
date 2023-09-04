"use client";

import { createContext, useState } from "react";

export const ProfileModalContext = createContext();

export const ProfileModalProvider = ({ children }) => {
  const [showChangeAvatarModal, setShowChangeAvatarModal] = useState(false);
  const [viewAvatarModal, setViewAvatarModal] = useState(false);
  const [viewCoverModal, setViewCoverModal] = useState(false);
  const [showChangeProfileCoverModal, setShowChangeProfileCoverModal] = useState(
    false
  );
  const [showEditProfileModal, setShowEditProfileModal] = useState(
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
  const handleToggleViewCoverModal = () => {
    setViewCoverModal(!viewCoverModal);
  };
  const handleToggleEditProfileModal = () => {
    setShowEditProfileModal(!showEditProfileModal);
  };
  return (
    <ProfileModalContext.Provider
      value={{
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
      }}
    >
      {children}
    </ProfileModalContext.Provider>
  );
};
