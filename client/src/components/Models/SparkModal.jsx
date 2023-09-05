import { SparkModalContext } from "@/context/SparkModalContext";
import { Box, Modal } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { FileUploader } from "react-drag-drop-files";
import Head from "../Head/Head";
import styles from "./Models.module.css";
import { ExtensionsContext } from "@/context/ExtensionsContext";
import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import Form from "../Form/Form";

const SparkModal = ({ type }) => {
  const {
    chooseFiles,
    handleToggleChooseFiles,
    handleFiles,
    handleToggleDeleteSparkModal,
    showDeleteSparkModal,
  } = useContext(SparkModalContext);
  const { audios, videos, images, docs } = useContext(ExtensionsContext);
  return type === "upload_file" ? (
    <Modal
      open={chooseFiles}
      onClose={handleToggleChooseFiles}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={`grid jcs aic g10 ${styles.choose_files_box}`}>
        <Head align={"center"} h={"h4"} title={"Choose Files And Images"} />
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
  ) : (
    type === "delete_spark" && (
      <Modal
        open={showDeleteSparkModal}
        onClose={handleToggleDeleteSparkModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={`grid jcs aic g10 ${styles.choose_files_box}`}>
          <Form type={type} />
        </Box>
      </Modal>
    )
  );
};

export default SparkModal;
