"use client";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "./AudioGridBox.module.css";
import Masonry from "react-masonry-css";
import { ChosenDataViewContext } from "@/context/ChosenDataViewContext";
import { RedIconButton } from "@/MUIComponents/RedIconButton/RedIconButton";
import {
  DeleteRounded,
  EditRounded,
  VisibilityRounded,
} from "@mui/icons-material";
import { SparkModalContext } from "@/context/SparkModalContext";
import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton/SecondaryButton";
import { SecondaryIconButton } from "@/MUIComponents/SecondaryIconButton/SecondaryIconButton";

const AudioGridBox = ({ posting, data, children }) => {
  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    768: 2,
    640:1
  };
  const { setDataType, toggleDataViewer,toggleDataShow,setShowAudioFiles } = useContext(
    ChosenDataViewContext
  );
  const handleDataPosting = () => {
    toggleDataViewer();
    setDataType("audios");
  };
  const handleDataView = () => {
    toggleDataShow();
    setDataType("audios");
    setShowAudioFiles(data);
  };
  return (
    data.length > 0 && (
      <Box className={`grid jcs aic g10`}>
        {children}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={`flex jcs aifs g10 ${styles.masonry_grid}`}
          columnClassName={"masonry_col_grid"}
        >
          {data.slice(0, 4).map((audio, i) => {
            const str = '"' + ("+" + (data.length - i).toString()) + '"';
            const overlay = i === 3 && data.length > i + 1;
            return (
              <Box
                sx={{
                  "&:after": overlay && { content: str },
                }}
                className={`flex aic jcc ${styles.image_box}`}
                onClick={posting ? handleDataPosting : handleDataView}
                key={i}
              >
                <Box
                  className={`${overlay && "overlay"} ${
                    overlay && styles.overlay
                  }`}
                />
                <audio
                  src={posting ? URL.createObjectURL(audio) : audio}
                  loading="lazy"
                  controls
                />
              </Box>
            );
          })}
        </Masonry>
        {posting && (
          <SecondaryIconButton
            className={`flex jcc aic g5`}
            sx={{ width: "fit-content" }}
            onClick={handleDataPosting}
          >
            <EditRounded />
            <Typography variant="h6">Edit</Typography>
          </SecondaryIconButton>
        )}
      </Box>
    )
  );
};

export default AudioGridBox;
