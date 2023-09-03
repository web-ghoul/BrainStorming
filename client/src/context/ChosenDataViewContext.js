import { useState } from "react";
import { createContext } from "react";

export const ChosenDataViewContext = createContext();

export const ChosenDataViewProvider = ({ children }) => {
  const [dataType, setDataType] = useState("image");
  const [openDataViewer, setOpenDataViewer] = useState(false);
  const toggleDataViewer = () => {
    setOpenDataViewer(!openDataViewer);
  };
  return (
    <ChosenDataViewContext.Provider
      value={{
        dataType,
        openDataViewer,
        setDataType,
        toggleDataViewer,
        setOpenDataViewer
      }}
    >
      {children}
    </ChosenDataViewContext.Provider>
  );
};
