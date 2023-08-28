"use client";

import { createContext, useState } from "react";

export const BackLoadingContext = createContext();

export const BackLoadingProvider = ({ children }) => {
  const [openBackLoading, setOpenBackLoading] = useState(false);
  const handleCloseBackLoading = () => {
    setOpenBackLoading(false);
  };
  const handleOpenBackLoading = () => {
    setOpenBackLoading(true);
  };
  return (
    <BackLoadingContext.Provider
      value={{ handleCloseBackLoading, handleOpenBackLoading, openBackLoading }}
    >
      {children}
    </BackLoadingContext.Provider>
  );
};
