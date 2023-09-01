"use client";

import { createContext, useState } from "react";

export const SparkModalContext = createContext();

export const SparkModalProvider = ({ children }) => {
  const [chooseFiles, setChooseFiles] = useState(false);
  const [files, setFiles] = useState(null);
  const handleToggleChooseFiles = () => {
    setChooseFiles(!chooseFiles);
  };
  const handleFiles = (f) => {
    setFiles(f);
  };
  return (
    <SparkModalContext.Provider
      value={{
        chooseFiles,
        handleToggleChooseFiles,
        files,
        handleFiles
      }}
    >
      {children}
    </SparkModalContext.Provider>
  );
};
