"use client";
import React from "react";
import { useState } from "react";
import {
  AttachFileRounded,
  DeleteRounded,
  ImageRounded,
  KeyboardVoiceRounded,
  VideoLibraryRounded,
  AudiotrackRounded,
} from "@mui/icons-material";
import { AudioRecorder } from "react-audio-voice-recorder";
import { RedIconButton } from "@/MUIComponents/RedIconButton/RedIconButton";
import ImagesGridBox from "@/components/GridBoxes/ImagesGridBox/ImagesGridBox";
import { Box, IconButton, TextField, Tooltip, Typography } from "@mui/material";
import { useContext } from "react";
import { SparkModalContext } from "@/context/SparkModalContext";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import AudioGridBox from "@/components/GridBoxes/AudioGridBox/AudioGridBox";
import DocsGridBox from "@/components/GridBoxes/DocsGridBox/DocsGridBox";

const CreateSpark = ({ formik }) => {
  const {
    handleToggleChooseFiles,
    imageFiles,
    audioFiles,
    docFiles,
    setRecord,
  } = useContext(SparkModalContext);
  const [recordExist, setRecordExist] = useState(false);
  const [recordBox, setRecordBox] = useState();
  const addAudioElement = (blob) => {
    const url = URL.createObjectURL(blob);
    setRecordBox(
      <Box className={`grid jcfs aic g10`}>
        <Box className={`flex jcfs aic g5`}>
          <KeyboardVoiceRounded
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
          <Typography variant="h6">Record</Typography>
        </Box>
        <Box className={`flex jcfs aic g10`}>
          <audio src={url} controls={true} />
          <RedIconButton onClick={deleteAudioElement}>
            <DeleteRounded />
          </RedIconButton>
        </Box>
      </Box>
    );
    setRecordExist(true);
    setRecord(blob);
  };
  const deleteAudioElement = () => {
    setRecordBox();
    setRecord();
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
          </Box>
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
          </Box>
        </Box>
      </Box>

      <Box className={`flex jcfs aic g10`}>
        <Tooltip title="Attach">
          <IconButton onClick={handleToggleChooseFiles}>
            <AttachFileRounded />
          </IconButton>
        </Tooltip>
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

      {(recordExist ||
        imageFiles.length > 0 ||
        docFiles.length > 0 ||
        audioFiles.length > 0) && (
        <Box className={`grid jcs aic g30`}>
          {recordExist && recordBox}
          <ImagesGridBox posting={true} data={imageFiles}>
            <Box className={`flex jcfs aic g5`}>
              <ImageRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
              <Typography variant="h6">Images</Typography>
            </Box>
          </ImagesGridBox>
          <DocsGridBox posting={true} data={docFiles}>
            <Box className={`flex jcfs aic g5`}>
              <VideoLibraryRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
              <Typography variant="h6">Documents</Typography>
            </Box>
          </DocsGridBox>
          <AudioGridBox posting={true} data={audioFiles}>
            <Box className={`flex jcfs aic g5`}>
              <AudiotrackRounded
                sx={{ color: (theme) => theme.palette.primary.main }}
              />
              <Typography variant="h6">Audio</Typography>
            </Box>
          </AudioGridBox>
        </Box>
      )}
      <LoadingButton text={"Spark"} />
    </>
  );
};

export default CreateSpark;
