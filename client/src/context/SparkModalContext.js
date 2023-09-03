"use client";

import { useContext } from "react";
import { createContext, useState } from "react";
import { ExtensionsContext } from "./ExtensionsContext";

export const SparkModalContext = createContext();

export const SparkModalProvider = ({ children }) => {
  const [chooseFiles, setChooseFiles] = useState(false);
  const { audios, videos, images, docs } = useContext(ExtensionsContext);
  const [audioFiles, setAudioFiles] = useState([]);
  const [docFiles, setDocFiles] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFiles, setVideoFiles] = useState([]);
  const [record, setRecord] = useState();

  const handleToggleChooseFiles = () => {
    setChooseFiles(!chooseFiles);
  };
  
  const handleFiles = (files) => {
    Object.keys(files).map((key)=>{
      const fileType=files[key].type.split("/")[1]
      if(audios.includes(fileType)){
        setAudioFiles((prev)=>[...prev,files[key]])
      }
      else if(videos.includes(fileType)){
        setVideoFiles((prev)=>[...prev,files[key]])
      }
      else if(images.includes(fileType)){
        setImageFiles((prev)=>[...prev,files[key]])
      }
      else if(docs.includes(fileType)){
        setDocFiles((prev)=>[...prev,files[key]])
      }
    })
  };

  const handleRemoveImageFile = (index)=>{
    imageFiles.splice(index,1)
    setImageFiles(imageFiles)
  }

  const handleRemoveVideoFile = (index)=>{
    videoFiles.splice(index,1)
    setVideoFiles(videoFiles)
  }

  const handleRemoveAudioFile = (index)=>{
    audioFiles.splice(index,1)
    setAudioFiles(audioFiles)
  }
  return (
    <SparkModalContext.Provider
      value={{
        chooseFiles,
        handleToggleChooseFiles,
        handleFiles,
        handleRemoveImageFile,
        handleRemoveVideoFile,
        handleRemoveAudioFile,
        audioFiles,
        docFiles,
        imageFiles,
        videoFiles,
        record,
        setAudioFiles,
        setDocFiles,
        setImageFiles,
        setVideoFiles,
        setRecord
      }}
    >
      {children}
    </SparkModalContext.Provider>
  );
};
