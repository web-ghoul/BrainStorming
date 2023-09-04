import { ChosenDataViewContext } from "@/context/ChosenDataViewContext";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import React from "react";
import { useContext } from "react";
import styles from "./ChosenDataView.module.css";
import Head from "../Head/Head";
import { RedIconButton } from "@/MUIComponents/RedIconButton/RedIconButton";
import { DeleteRounded, Preview } from "@mui/icons-material";
import { SparkModalContext } from "@/context/SparkModalContext";
import SpecialImage from "../SpecialImage/SpecialImage";
import Image from "next/image";
import pdfImg from "../../../public/images/pdf.png";
import powerPointImg from "../../../public/images/pptx.png";
import excelImg from "../../../public/images/xlsx.png";
import wordImg from "../../../public/images/doc.png";

const ChosenDataView = () => {
  const { dataType, openDataViewer, toggleDataViewer } = useContext(
    ChosenDataViewContext
  );
  const {
    imageFiles,
    docFiles,
    audioFiles,
    handleRemoveImageFile,
    handleRemoveDocFile,
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
        ) : dataType === "docs" ? (
          <>
            <Head align={"center"} h={"h4"} title={"Chosen Documents"} />
            <Box className={`grid jcs aifs g20 ${styles.data_viewer}`}>
              {docFiles.map((doc, i) => {
                const fileType = doc.name.split(".")[
                  doc.name.split(".").length - 1
                ];
                return (
                  <Box
                    key={i}
                    className={`grid jcs aife g10`}
                    sx={{ height: "100%" }}
                  >
                    <Box
                      sx={{
                        borderColor: (theme) =>
                          fileType === "pdf"
                            ? theme.palette.pdf
                            : fileType === "xlsx"
                            ? theme.palette.excel
                            : fileType === "pptx"
                            ? theme.palette.power_point
                            : theme.palette.word,
                        borderWidth: "2px",
                        borderStyle: "solid",
                        position: "relative",
                      }}
                      className={`flex jcfs aic g5 ${styles.file}`}
                    >
                      {fileType === "pdf" ? (
                        <Image
                          src={pdfImg}
                          width={100}
                          height={100}
                          alt={"document"}
                        />
                      ) : fileType === "xlsx" ? (
                        <Image
                          src={excelImg}
                          width={100}
                          height={100}
                          alt={"document"}
                        />
                      ) : fileType === "pptx" ? (
                        <Image
                          src={powerPointImg}
                          width={100}
                          height={100}
                          alt={"document"}
                        />
                      ) : (
                        <Image
                          src={wordImg}
                          width={100}
                          height={100}
                          alt={"document"}
                        />
                      )}
                      <Typography variant="h6">
                        {doc.name.length > 25
                          ? doc.name.slice(0, 25) + "." + fileType
                          : doc.name}
                      </Typography>
                      <IconButton onClick={()=>window.open(URL.createObjectURL(doc))}>
                        <Preview
                          sx={{
                            "&:hover": {
                              color: (theme) => theme.palette.primary.main,
                              cursor: "pointer",
                            },
                          }}
                        />
                      </IconButton>
                    </Box>
                    <RedIconButton
                      onClick={() => {
                        handleRemoveDocFile(i);
                        toggleDataViewer();
                      }}
                    >
                      <DeleteRounded />
                      <Typography variant="h6">Remove</Typography>
                    </RedIconButton>
                  </Box>
                );
              })}
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
