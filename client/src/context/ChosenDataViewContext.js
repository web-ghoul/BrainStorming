import { useState } from "react";
import { createContext } from "react";

export const ChosenDataViewContext = createContext();

export const ChosenDataViewProvider = ({ children }) => {
  const [dataType, setDataType] = useState("image");
  const [openDataViewer, setOpenDataViewer] = useState(false);
  const [openDataShow, setOpenDataShow] = useState(false);
  const [showDocFiles, setShowDocFiles] = useState([]);
  const [showAudioFiles, setShowAudioFiles] = useState([]);
  const toggleDataViewer = () => {
    setOpenDataViewer(!openDataViewer);
  };
  const toggleDataShow = () => {
    setOpenDataShow(!openDataShow);
  };
  return (
    <ChosenDataViewContext.Provider
      value={{
        dataType,
        openDataViewer,
        openDataShow,
        showDocFiles,
        showAudioFiles,
        setDataType,
        setShowDocFiles,
        setShowAudioFiles,
        toggleDataViewer,
        toggleDataShow,
        setOpenDataViewer
      }}
    >
      {children}
    </ChosenDataViewContext.Provider>
  );
};
