import React from "react";
import { SparkModalContext } from "@/context/SparkModalContext";
import { useContext } from "react";
import { FileUploader } from "react-drag-drop-files";
import Head from "../Head/Head";
import styles from "./Models.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ExtensionsContext } from "@/context/ExtensionsContext";
import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import Form from "../Form/Form";
import { ChosenDataViewContext } from "@/context/ChosenDataViewContext";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { RedIconButton } from "@/MUIComponents/RedIconButton/RedIconButton";
import { Close, DeleteRounded, Preview } from "@mui/icons-material";
import SpecialImage from "../SpecialImage/SpecialImage";
import Image from "next/image";
import pdfImg from "../../../public/images/pdf.png";
import powerPointImg from "../../../public/images/pptx.png";
import excelImg from "../../../public/images/xlsx.png";
import wordImg from "../../../public/images/doc.png";
import { MyThemeContext } from "@/context/MyThemeContext";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
import { Carousel } from "react-responsive-carousel";

const SparkModal = ({ type }) => {
  const { mode } = useContext(MyThemeContext);
  const {
    chooseFiles,
    handleToggleChooseFiles,
    handleFiles,
    handleToggleDeleteSparkModal,
    showDeleteSparkModal,
    imageFiles,
    docFiles,
    audioFiles,
    handleRemoveImageFile,
    handleRemoveDocFile,
    handleRemoveAudioFile,
  } = useContext(SparkModalContext);
  const {
    dataType,
    openDataViewer,
    toggleDataViewer,
    openDataShow,
    showAudioFiles,
    showDocFiles,
    toggleDataShow,
    showImageFiles,
  } = useContext(ChosenDataViewContext);
  const { audios, images, docs } = useContext(ExtensionsContext);
  return type === "upload_file" ? (
    <Modal
      open={chooseFiles}
      onClose={handleToggleChooseFiles}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className={`grid jcs aic g10 ${styles.modal_box} ${styles.avatar_box}`}
      >
        <Head align={"center"} h={"h4"} title={"Choose Files And Images"} />
        <FileUploader
          multiple={true}
          types={[...audios, ...images, ...docs]}
          hoverTitle={"Drop here"}
          onSelect={handleToggleChooseFiles}
          handleChange={handleFiles}
        />
        <MainButton onClick={handleToggleChooseFiles}>Done</MainButton>
      </Box>
    </Modal>
  ) : type === "delete_spark" ? (
    <Modal
      open={showDeleteSparkModal}
      onClose={handleToggleDeleteSparkModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g10 ${styles.modal_box}`}>
        <Form type={type} />
      </Box>
    </Modal>
  ) : type === "view_data" ? (
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
                      <IconButton
                        onClick={() => window.open(URL.createObjectURL(doc))}
                      >
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
  ) : (
    type === "show_data" && (
      <Modal
        onClose={toggleDataShow}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={openDataShow}
      >
        <Box
          className={`grid jcs aifs g30 ${
            dataType === "images"
              ? styles.modal_carousel
              : styles.chosen_data_viewer_box
          }`}
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.white
                : theme.palette.black,
            borderColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.white
                : theme.palette.primary.main,
          }}
        >
          {dataType === "docs" ? (
            <>
              <Head
                color={mode === "dark" ? "#fff" : "#000"}
                align={"center"}
                h={"h4"}
                title={"Documents"}
              />
              <Box className={`grid jcs aifs g20 ${styles.data_viewer}`}>
                {showDocFiles.map((doc, i) => {
                  const fileType = doc.split(".")[doc.split(".").length - 1];
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
                          File-{i}.{fileType}
                        </Typography>
                        <IconButton onClick={() => window.open(doc)}>
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
                    </Box>
                  );
                })}
              </Box>
            </>
          ) : dataType === "audios" ? (
            <>
              <Head
                color={mode === "dark" ? "#fff" : "#000"}
                align={"center"}
                h={"h3"}
                title={"Chosen Audios"}
              />
              <Box className={`grid jcs aifs g20 ${styles.data_viewer}`}>
                {showAudioFiles.map((d, i) => (
                  <Box
                    key={i}
                    className={`grid jcs aife g10`}
                    sx={{ height: "100%" }}
                  >
                    <audio src={d} loading="lazy" controls />
                  </Box>
                ))}
              </Box>
            </>
          ) : (
            dataType === "images" && (
              <>
                <MainIconButton onClick={toggleDataShow}>
                  <Close />
                </MainIconButton>
                <Carousel selectedItem={true} infiniteLoop={true}>
                  {showImageFiles.map((img, i) => (
                    <SpecialImage key={i} img={img} slider={true} />
                  ))}
                </Carousel>
              </>
            )
          )}
        </Box>
      </Modal>
    )
  );
};

export default SparkModal;
