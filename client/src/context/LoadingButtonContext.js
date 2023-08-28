"use client";

import { createContext, useState } from "react";

export const LoadingButtonContext = createContext();

export const LoadingButtonProvider = ({ children }) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  return (
    <LoadingButtonContext.Provider
      value={{ buttonLoading, setButtonLoading }}
    >
      {children}
    </LoadingButtonContext.Provider>
  );
};
