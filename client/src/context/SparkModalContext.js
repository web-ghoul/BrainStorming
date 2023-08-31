"use client";

import { createContext, useState } from "react";

export const SparkModalContext = createContext();

export const SparkModalProvider = ({ children }) => {
  const [chooseFiles, setChooseFiles] = useState(false);
  const handleToggleChooseFiles = () => {
    setChooseFiles(!chooseFiles);
  };

  return (
    <SparkModalContext.Provider
      value={{
        chooseFiles,
        handleToggleChooseFiles,
      }}
    >
      {children}
    </SparkModalContext.Provider>
  );
};
