import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import { Box, TextField, Typography } from "@mui/material";
import React, { useContext, useCallback } from "react";
import "../Form.css";
import { RedButton } from "@/MUIComponents/RedButton/RedButton";
import { FileUploader } from "react-drag-drop-files";
import Head from "@/components/Head/Head";
import { CameraAltRounded } from "@mui/icons-material";
import { ProfileModalContext } from "@/context/ProfileModalContext";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import { useDropzone } from "react-dropzone";

const ChangeAvatar = ({ handleChangeFile }) => {
  const { handleToggleChangeAvatarModal } = useContext(ProfileModalContext);
  const onDrop = useCallback((acceptedFiles) => {
    handleChangeFile(acceptedFiles)
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];
  return (
    <Box className={`grid aic jcs g20 add_new_team_form_contain`}>
      <Box className={`flex jcc aic g10 add_new_team_title`}>
        <CameraAltRounded
          sx={{ color: (theme) => theme.palette.primary.main }}
        />
        <Head
          title={"Change Profile Avatar"}
          h={"h3"}
          color={(theme) => theme.palette.primary.main}
        />
      </Box>
      <Box>
        <TextField
          type="file"
          onChange={handleChangeFile}
        />
        {isDragActive ? (
          <Typography variant="h6">Drop the files here ...</Typography>
        ) : (
          <Typography variant="h6">
            Drag 'n' drop some files here, or click to select files
          </Typography>
        )}
      </Box>
      <Box className={`flex jcfe aic g20`}>
        <LoadingButton text={"Change"} />
        <RedButton onClick={handleToggleChangeAvatarModal}>Cancel</RedButton>
      </Box>
    </Box>
  );
};

export default ChangeAvatar;
