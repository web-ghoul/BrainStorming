"use client";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "./DocsGridBox.module.css";
import Masonry from "react-masonry-css";
import { CarouselContext } from "@/context/CarouselContext";
import { ChosenDataViewContext } from "@/context/ChosenDataViewContext";
import { SecondaryIconButton } from "@/MUIComponents/SecondaryIconButton/SecondaryIconButton";
import { EditRounded, Preview } from "@mui/icons-material";
import Image from "next/image";
import pdfImg from "../../../public/images/pdf.png";
import powerPointImg from "../../../public/images/pptx.png";
import excelImg from "../../../public/images/xlsx.png";
import wordImg from "../../../public/images/doc.png";

const DocsGridBox = ({ posting, data, children }) => {
  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    768: 2,
  };
  const {
    setDataType,
    setShowDocFiles,
    toggleDataViewer,
    toggleDataShow,
  } = useContext(ChosenDataViewContext);
  const handleDataView = () => {
    toggleDataViewer();
    setDataType("docs");
  };
  const handleDataShow = () => {
    toggleDataShow();
    setDataType("docs");
    setShowDocFiles(data);
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
                  <Box
                    sx={{
                      "&:after": overlay && { content: str },
                    }}
                    className={`grid aic jcs ${styles.image_box}`}
                    onClick={handleDataView}
                    key={i}
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
                      <Box
                        className={`${overlay && "overlay"} ${
                          overlay && styles.overlay
                        }`}
                      />
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
                        {doc.name.length > 10
                          ? doc.name.slice(0, 10) + "." + fileType
                          : doc.name}
                      </Typography>
                    </Box>
                  </Box>
                );
              })
            : data.slice(0, 4).map((doc, i) => {
                const str = '"' + ("+" + (data.length - i).toString()) + '"';
                const overlay = i === 3 && data.length > i + 1;
                const fileType = doc.split(".")[doc.split(".").length - 1];
                return (
                  <Box
                    sx={{
                      "&:after": overlay && { content: str },
                    }}
                    className={`grid aic jcs ${styles.image_box}`}
                    onClick={handleDataShow}
                    key={i}
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
                      <Box
                        className={`${overlay && "overlay"} ${
                          overlay && styles.overlay
                        }`}
                      />
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
                    </Box>
                  </Box>
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
