import { SparkModalContext } from "@/context/SparkModalContext";
import { Box, Modal } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { FileUploader } from "react-drag-drop-files";
import Head from "../Head/Head";
import styles from "./SparkModal.module.css";
import { ExtensionsContext } from "@/context/ExtensionsContext";
import { MainButton } from "@/MUIComponents/MainButton/MainButton";

const SparkModal = () => {
  const { chooseFiles, handleToggleChooseFiles, handleFiles } =
    useContext(SparkModalContext);
  const { audios, videos, images, docs } = useContext(ExtensionsContext);
  return (
    <Modal
      open={chooseFiles}
      onClose={handleToggleChooseFiles}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g10 ${styles.choose_files_box}`}>
        <Head align={"center"} h={"h3"} title={"Choose Files And Images"} />
        <FileUploader
          multiple={true}
          types={[...audios, ...images, ...videos, ...docs]}
          hoverTitle={"Drop here"}
          onSelect={handleToggleChooseFiles}
          handleChange={handleFiles}
        />
        <MainButton onClick={handleToggleChooseFiles}>Done</MainButton>
      </Box>
    </Modal>
  );
};

export default SparkModal;
