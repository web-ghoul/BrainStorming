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
import Document from "../Document/Document";

const SparkModal = ({ type }) => {
  const { mode } = useContext(MyThemeContext);
  const {
    chooseFiles,
    handleToggleChooseFiles,
    handleFiles,
    handleToggleDeleteSparkModal,
    handleToggleUpdateSparkModal,
    showDeleteSparkModal,
    imageFiles,
    docFiles,
    audioFiles,
    handleRemoveImageFile,
    handleRemoveDocFile,
    handleRemoveAudioFile,
    showUpdateSparkModal,
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
        <Head
          color={mode === "dark" ? "#fff" : "#000"}
          align={"center"}
          h={"h4"}
          title={"Choose Files And Images"}
        />
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
      <Box
        className={`grid jcs aifs g30 ${styles.chosen_data_viewer_box}`}
      >
        {dataType === "images" ? (
          <>
            <Head
              align={"center"}
              color={mode === "dark" ? "#fff" : "#000"}
              h={"h3"}
              title={"Chosen Images"}
            />
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
            <Head
              align={"center"}
              h={"h4"}
              color={mode === "dark" ? "#fff" : "#000"}
              title={"Chosen Documents"}
            />
            <Box className={`grid jcs aifs g20 ${styles.data_viewer}`}>
              {docFiles.map((doc, i) => {
                const fileType = doc.name.split(".")[
                  doc.name.split(".").length - 1
                ];
                return (
                  <Document
                    posting={true}
                    doc={doc}
                    fileType={fileType}
                    i={i}
                    isShow={false}
                    modal={true}
                  />
                );
              })}
            </Box>
          </>
        ) : (
          <>
            <Head
              color={mode === "dark" ? "#fff" : "#000"}
              align={"center"}
              h={"h3"}
              title={"Chosen Audios"}
            />
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
  ) : type === "show_data" ? (
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
                  <Document
                    doc={doc}
                    fileType={fileType}
                    i={i}
                    isShow={true}
                    modal={true}
                  />
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
  ) : (
    type === "update_spark" && (
      <Modal
        open={showUpdateSparkModal}
        onClose={handleToggleUpdateSparkModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={`grid jcs aic g10 `}>
          <Form type={type} />
        </Box>
      </Modal>
    )
  );
};

export default SparkModal;
