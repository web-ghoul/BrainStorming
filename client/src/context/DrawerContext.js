import { createContext, useState } from "react";

export const DrawerContext = createContext();

export const DrawerProvider = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <DrawerContext.Provider
      value={{ toggleDrawer, openDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
