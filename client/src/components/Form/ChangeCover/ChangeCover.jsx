import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import { Box } from "@mui/material";
import React, { useContext } from "react";
import "../Form.css";
import { RedButton } from "@/MUIComponents/RedButton/RedButton";
import { FileUploader } from "react-drag-drop-files";
import Head from "@/components/Head/Head";
import { CameraAltRounded } from "@mui/icons-material";
import { ProfileModalContext } from "@/context/ProfileModalContext";

const ChangeCover = ({ handleChangeFile, formik }) => {
  const { handleToggleChangeProfileCoverModal } = useContext(
    ProfileModalContext
  );
  const fileTypes = ["JPG", "JPEG", "PNG", "GIF"];
  return (
    <Box className={`grid aic jcs g20 add_new_team_form_contain`}>
      <Box className={`flex jcc aic g10 add_new_team_title`}>
        <CameraAltRounded
          sx={{ color: (theme) => theme.palette.primary.main }}
        />
        <Head
          title={"Change Profile Cover"}
          h={"h3"}
          color={(theme) => theme.palette.primary.main}
        />
      </Box>
      <FileUploader
        handleChange={handleChangeFile}
        name="file"
        types={fileTypes}
        multiple={false}
      />
      <Box className={`flex jcfe aic g20`}>
        <MainButton type="submit">Change</MainButton>
        <RedButton onClick={handleToggleChangeProfileCoverModal}>
          Cancel
        </RedButton>
      </Box>
    </Box>
  );
};

export default ChangeCover;
