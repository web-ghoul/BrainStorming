"use client";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  SentimentSatisfiedRounded,
  AttachFileRounded,
  DeleteRounded,
} from "@mui/icons-material";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { AudioRecorder } from "react-audio-voice-recorder";
import { RedIconButton } from "@/MUIComponents/RedIconButton/RedIconButton";
import ImagesGridBox from "@/components/ImagesGridBox/ImagesGridBox";
import { Box, IconButton, TextField } from "@mui/material";
import { useContext } from "react";
import { SparkModalContext } from "@/context/SparkModalContext";
import LoadingButton from "@/components/LoadingButton/LoadingButton";

const CreateSpark = ({ handleChangeFile, formik }) => {
  const [dropEmojiShow, setDropEmojiShow] = useState(false);
  const [brainWaveEmojiShow, setBrainWaveEmojiShow] = useState(false);
  const { handleToggleChooseFiles } = useContext(SparkModalContext);
  const [recordExist, setRecordExist] = useState(false);
  const [images, setImages] = useState([]);
  const recordRef = useRef();

  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    const audio = document.createElement("audio");
    audio.src = url;
    audio.controls = true;
    recordRef.current.appendChild(audio);
    console.log(blob, url, audio);
    setRecordExist(true);
    handleChangeFile(blob);
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
              id="idea"
              name="idea"
              label="Start a Spark"
              fullWidth
              multiline
              maxRows={4}
              variant="standard"
              value={formik.values.idea}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.idea && Boolean(formik.errors.idea)}
              helperText={formik.touched.idea && formik.errors.idea}
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
                formik.values.idea += e.native;
              }}
            />
          )}
        </Box>
        <Box>
          <Box className={`flex jcs aifs g5`}>
            <TextField
              id="description"
              name="description"
              label="Brainwave"
              multiline
              fullWidth
              maxRows={10}
              variant="standard"
              value={formik.values.description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
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
                formik.values.description += e.native;
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
