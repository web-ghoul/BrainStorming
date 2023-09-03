import { ChosenDataViewContext } from "@/context/ChosenDataViewContext";
import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import styles from "./ChosenDataView.module.css";
import Head from "../Head/Head";
import { RedIconButton } from "@/MUIComponents/RedIconButton/RedIconButton";
import { DeleteRounded } from "@mui/icons-material";
import { SparkModalContext } from "@/context/SparkModalContext";
import SpecialImage from "../SpecialImage/SpecialImage";

const ChosenDataView = () => {
  const { dataType, openDataViewer, toggleDataViewer } = useContext(
    ChosenDataViewContext
  );
  const {
    imageFiles,
    videoFiles,
    audioFiles,
    handleRemoveImageFile,
    handleRemoveVideoFile,
    handleRemoveAudioFile,
  } = useContext(SparkModalContext);
  return (
    <Modal
      onClose={toggleDataViewer}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={openDataViewer}
    >
      <Box className={`grid jcs aifs g30 ${styles.chosen_data_viewer_box}`}>
        {dataType === "images" ? (
          <>
            <Head align={"center"} h={"h3"} title={"Chosen Images"} />
            <Box className={`grid jcs aifs g20 ${styles.data_viewer}`}>
              {imageFiles.map((d, i) => (
                <Box key={i} className={`grid jcs aic g10`}>
                  <SpecialImage img={URL.createObjectURL(d)} posting={true} />
                  <RedIconButton
                    onClick={() => {
                      handleRemoveImageFile(i);
                      toggleDataViewer();
                    }}
                  >
                    <DeleteRounded />
                    <Typography variant="h6">Remove</Typography>
                  </RedIconButton>
                </Box>
              ))}
            </Box>
          </>
        ) : dataType === "videos" ? (
          <>
            <Head align={"center"} h={"h3"} title={"Chosen Videos"} />
            <Box className={`grid jcs aifs g20 ${styles.data_viewer}`}>
              {videoFiles.map((d, i) => (
                <Box
                  key={i}
                  className={`grid jcs aife g10`}
                  sx={{ height: "100%" }}
                >
                  <video loading="lazy" controls>
                    <source src={URL.createObjectURL(d)} />
                  </video>
                  <RedIconButton
                    onClick={() => {
                      handleRemoveVideoFile(i);
                      toggleDataViewer();
                    }}
                  >
                    <DeleteRounded />
                    <Typography variant="h6">Remove</Typography>
                  </RedIconButton>
                </Box>
              ))}
            </Box>
          </>
        ) : (
          <>
            <Head align={"center"} h={"h3"} title={"Chosen Audios"} />
            <Box className={`grid jcs aifs g20 ${styles.data_viewer}`}>
              {audioFiles.map((d, i) => (
                <Box
                  key={i}
                  className={`grid jcs aife g10`}
                  sx={{ height: "100%" }}
                >
                  <audio src={URL.createObjectURL(d)} loading="lazy" controls />
                  <RedIconButton
                    onClick={() => {
                      handleRemoveAudioFile(i);
                      toggleDataViewer();
                    }}
                  >
                    <DeleteRounded />
                    <Typography variant="h6">Remove</Typography>
                  </RedIconButton>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ChosenDataView;
