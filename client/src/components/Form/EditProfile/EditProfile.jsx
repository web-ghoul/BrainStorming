"use client";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  SentimentSatisfiedRounded,
  AttachFileRounded,
  DeleteRounded,
  ImageRounded,
  KeyboardVoiceRounded,
  VideoLibraryRounded,
  AudiotrackRounded,
} from "@mui/icons-material";

import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { AudioRecorder } from "react-audio-voice-recorder";
import { RedIconButton } from "@/MUIComponents/RedIconButton/RedIconButton";
import ImagesGridBox from "@/components/GridBoxes/ImagesGridBox/ImagesGridBox";
import { Box, IconButton, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { SparkModalContext } from "@/context/SparkModalContext";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import VideosGridBox from "@/components/GridBoxes/DocsGridBox/DocsGridBox";
import AudioGridBox from "@/components/GridBoxes/AudioGridBox/AudioGridBox";
import { RedButton } from "@/MUIComponents/RedButton/RedButton";
import { ProfileModalContext } from "@/context/ProfileModalContext";
import Head from "@/components/Head/Head";
import { handleAlertToastify } from "../../../functions/reactToastify";

const EditProfile = ({ formik }) => {
  const [bioEmojiShow, setBioEmojiShow] = useState(false);
  const [aboutEmojiShow, setAboutEmojiShow] = useState(false);
  const [usernameEmojiShow, setUsernameEmojiShow] = useState(false);
  const { handleToggleEditProfileModal } = useContext(ProfileModalContext);
  const [help, setHelp] = useState(false);
  return (
    <>
      <Head align={"center"} h={"h3"} title={"Edit Profile"} />
      <Box className={`grid jcs aic g20`}>
        <Box className={`grid jcs aic g5`}>
          <Box className={`flex jcs aic g5`}>
            <TextField
              id="name"
              name="name"
              label="Name"
              fullWidth
              maxRows={1}
              variant="standard"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <IconButton
              onClick={() => {
                setUsernameEmojiShow(!usernameEmojiShow);
              }}
            >
              <SentimentSatisfiedRounded />
            </IconButton>
          </Box>
          {usernameEmojiShow && (
            <Picker
              theme={"light"}
              data={data}
              onEmojiSelect={(e) => {
                if (formik.values.name.length >= 15) {
                  handleAlertToastify("15 letter Maximum", "warningX");
                } else {
                  formik.values.name += e.native;
                  setHelp(!help);
                }
              }}
            />
          )}
        </Box>
        <Box className={`grid jcs aic g5`}>
          <Box className={`flex jcs aic g5`}>
            <TextField
              id="bio"
              name="bio"
              label="bio"
              fullWidth
              multiline
              maxRows={4}
              variant="standard"
              value={formik.values.bio}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.bio && Boolean(formik.errors.bio)}
              helperText={formik.touched.bio && formik.errors.bio}
            />
            <IconButton onClick={() => setBioEmojiShow(!bioEmojiShow)}>
              <SentimentSatisfiedRounded />
            </IconButton>
          </Box>

          {bioEmojiShow && (
            <Picker
              theme={"light"}
              data={data}
              onEmojiSelect={(e) => {
                formik.values.bio += e.native;
                setHelp(!help);
              }}
            />
          )}
        </Box>
        <Box className={`grid jcs aic g5`}>
          <Box className={`flex jcs aifs g5`}>
            <TextField
              id="about"
              name="about"
              label="About"
              multiline
              fullWidth
              maxRows={10}
              variant="standard"
              value={formik.values.about}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.about && Boolean(formik.errors.about)}
              helperText={formik.touched.about && formik.errors.about}
            />
            <IconButton onClick={() => setAboutEmojiShow(!aboutEmojiShow)}>
              <SentimentSatisfiedRounded />
            </IconButton>
          </Box>
          {aboutEmojiShow && (
            <Picker
              theme={"light"}
              data={data}
              onEmojiSelect={(e) => {
                formik.values.about += e.native;
                setHelp(!help);
              }}
            />
          )}
        </Box>
      </Box>
      <Box className={`flex jcsb aic g20`}>
        <LoadingButton text={"Update"} />
        <RedButton onClick={handleToggleEditProfileModal}>Cancel</RedButton>
      </Box>
    </>
  );
};

export default EditProfile;
