"use client";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  SentimentSatisfiedRounded,
  AttachFileRounded,
  Collections,
  DeleteRounded,
} from "@mui/icons-material";
import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { AudioRecorder } from "react-audio-voice-recorder";
import { RedIconButton } from "@/MUIComponents/RedIconButton/RedIconButton";
import { FileUploader } from "react-drag-drop-files";
import ImagesGridBox from "@/components/ImagesGridBox/ImagesGridBox";
import { Box, IconButton, TextField } from "@mui/material";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import { useContext } from "react";
import { SparkModalContext } from "@/context/SparkModalContext";

const CreateSpark = () => {
  const [dropEmojiShow, setDropEmojiShow] = useState(false);
  const [brainWaveEmojiShow, setBrainWaveEmojiShow] = useState(false);
  const {
    handleToggleChooseFiles,
  } = useContext(SparkModalContext);
  const [drop, setDrop] = useState("");
  const [brainWave, setBrainWave] = useState("");
  const [recordExist, setRecordExist] = useState(false);
  const [images, setImages] = useState([]);
  const recordRef = useRef();

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    recordRef.current.appendChild(audio);
    setRecordExist(true);
  };

  const deleteAudioElement = () => {
    recordRef.current.removeChild(recordRef.current.firstChild);
    setRecordExist(false);
  };
  return (
    <>
      <Box className={`grid jcs aic g20`}>
        <Box className={`grid jcs aic g5`}>
          <Box className={`flex jcs aic g5`}>
            <TextField
              id="drop"
              label="Start a Spark"
              fullWidth
              multiline
              maxRows={4}
              variant="standard"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
            />
            <IconButton onClick={() => setDropEmojiShow(!dropEmojiShow)}>
              <SentimentSatisfiedRounded />
            </IconButton>
          </Box>

          {dropEmojiShow && (
            <Picker
              onClickOutside={() => setDropEmojiShow(false)}
              theme={"light"}
              data={data}
              onEmojiSelect={(e) => {
                setDrop(drop + e.native);
              }}
            />
          )}
        </Box>
        <Box>
          <Box className={`flex jcs aifs g5`}>
            <TextField
              id="brainwave"
              label="Brainwave"
              multiline
              fullWidth
              maxRows={10}
              variant="standard"
              value={brainWave}
              onChange={(e) => setBrainWave(e.target.value)}
            />
            <IconButton
              onClick={() => setBrainWaveEmojiShow(!brainWaveEmojiShow)}
            >
              <SentimentSatisfiedRounded />
            </IconButton>
          </Box>
          {brainWaveEmojiShow && (
            <Picker
              onClickOutside={() => setBrainWaveEmojiShow(false)}
              theme={"light"}
              data={data}
              onEmojiSelect={(e) => {
                setBrainWave(brainWave + e.native);
              }}
            />
          )}
        </Box>
      </Box>

      <Box className={`flex jcfs aic g10`}>
        <IconButton onClick={handleToggleChooseFiles}>
          <AttachFileRounded />
        </IconButton>
        {!recordExist && (
          <AudioRecorder
            onRecordingComplete={addAudioElement}
            audioTrackConstraints={{
              noiseSuppression: true,
              echoCancellation: true,
            }}
            downloadOnSavePress={false}
            downloadFileExtension="webm"
            showVisualizer={true}
          />
        )}
      </Box>

      <Box className={`grid jcs aic g20`}>
        <Box ref={recordRef} className={`flex jcfs aic g10`}>
          {recordExist && (
            <RedIconButton onClick={deleteAudioElement}>
              <DeleteRounded />
            </RedIconButton>
          )}
        </Box>
        {images.length > 0 && <ImagesGridBox data={images} />}
      </Box>

      <LoadingButton text={"Spark"} />
    </>
  );
};

export default CreateSpark;
