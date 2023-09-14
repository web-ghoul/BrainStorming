"use client";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "./DocsGridBox.module.css";
import Masonry from "react-masonry-css";
import { ChosenDataViewContext } from "@/context/ChosenDataViewContext";
import { SecondaryIconButton } from "@/MUIComponents/SecondaryIconButton/SecondaryIconButton";
import { EditRounded } from "@mui/icons-material";
import Document from "@/components/Document/Document";

const DocsGridBox = ({ posting, data, children }) => {
  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    768: 2,
    640:1
  };
  const { setDataType, setShowDocFiles, toggleDataShow } = useContext(
    ChosenDataViewContext
  );
  const handleDataShow = () => {
    toggleDataShow();
    setDataType("docs");
    setShowDocFiles(data);
  };
  const handleDataView = (i) => {
    toggleDataShow();
    setShowDocFiles(data);
    setDataType("docs");
  };
  return (
    data.length > 0 && (
      <Box className={`grid jcs aic g10`}>
        {children}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className={`flex jcs aifs g10 ${styles.masonry_grid}`}
          columnClassName={"masonry_col_grid"}
        >
          {posting
            ? data.slice(0, 4).map((doc, i) => {
                const str = '"' + ("+" + (data.length - i).toString()) + '"';
                const overlay = i === 3 && data.length > i + 1;
                const fileType = doc.name.split(".")[
                  doc.name.split(".").length - 1
                ];
                return (
                  <Document
                    posting={posting}
                    fileType={fileType}
                    doc={doc}
                    overlay={overlay}
                    i={i}
                    key={i}
                    str={str}
                  />
                );
              })
            : data.slice(0, 4).map((doc, i) => {
                const str = '"' + ("+" + (data.length - i).toString()) + '"';
                const overlay = i === 3 && data.length > i + 1;
                const fileType = doc.split(".")[doc.split(".").length - 1];
                return (
                  <Document
                    posting={posting}
                    handleDataShow={handleDataShow}
                    fileType={fileType}
                    doc={doc}
                    overlay={overlay}
                    i={i}
                    key={i}
                    str={str}
                  />
                );
              })}
        </Masonry>
        {posting && (
          <SecondaryIconButton
            className={`flex jcc aic g5`}
            sx={{ width: "fit-content" }}
            onClick={handleDataView}
          >
            <EditRounded />
            <Typography variant="h6">Edit</Typography>
          </SecondaryIconButton>
        )}
      </Box>
    )
  );
};

export default DocsGridBox;
