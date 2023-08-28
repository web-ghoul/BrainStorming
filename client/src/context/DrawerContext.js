"use client";

import { createContext, useState } from "react";

export const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (o) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(o);
  };
  return (
    <DrawerContext.Provider
      value={{ toggleDrawer, openDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
