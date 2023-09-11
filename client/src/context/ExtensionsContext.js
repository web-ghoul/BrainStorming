"use client";

import { createContext } from "react";

export const ExtensionsContext = createContext();

export const ExtensionsProvider = ({ children }) => {
  const audios = ["ogg","webm", "avi", "aac", "flac", "wav"];
  const videos = ["webm", "avi", "mov", "flv", "mp4", "mp3"];
  const docs = ["doc", "pdf", "docx", "xlsx", "pptx"];
  const images = ["png","jfif", "jpeg", "gif", "jpg", "tiff", "tif", "webp", "bmp"];
  return (
    <ExtensionsContext.Provider
      value={{ audios, videos, docs, images}}
    >
      {children}
    </ExtensionsContext.Provider>
  );
};
