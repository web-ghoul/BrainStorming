"use client";
import React, { useRef, useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import styles from "./CreateIdeaBox.module.css";
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
import ImagesGridBox from "../ImagesGridBox/ImagesGridBox";
import { FileUploader } from "react-drag-drop-files";

const CreateIdeaBox = () => {
  const [dropEmojiShow, setDropEmojiShow] = useState(false);
  const [brainWaveEmojiShow, setBrainWaveEmojiShow] = useState(false);
  const [drop, setDrop] = useState("");
  const [brainWave, setBrainWave] = useState("");
  const recordRef = useRef();
  const [recordExist, setRecordExist] = useState(false);
  const [images, setImages] = useState([]);

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
    <Box
      width={"100%"}
      className={`grid jcs aic g20 ${styles.create_idea_box}`}
    >
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

      <Box className={`flex jcfs aic g10 ${styles.icon_buttons}`}>
        <IconButton>
          <Collections />
        </IconButton>
        <IconButton>
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

      <Box>
        <MainButton sx={{ width: "100%" }}>Spark</MainButton>
      </Box>
    </Box>
  );
};

export default CreateIdeaBox;
