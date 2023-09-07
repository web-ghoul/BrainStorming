"use client";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "./DocsGridBox.module.css";
import Masonry from "react-masonry-css";
import { CarouselContext } from "@/context/CarouselContext";
import { ChosenDataViewContext } from "@/context/ChosenDataViewContext";
import { SecondaryIconButton } from "@/MUIComponents/SecondaryIconButton/SecondaryIconButton";
import { EditRounded, PictureAsPdf, Preview } from "@mui/icons-material";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
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
  const { handleToggleCarousel, setIsPosting, getCarouselData } = useContext(
    CarouselContext
  );
  const { setDataType, toggleDataViewer } = useContext(ChosenDataViewContext);
  const handleDataPosting = () => {
    toggleDataViewer();
    setDataType("docs");
  };
  const handleDataView = () => {
    handleToggleCarousel(i);
    getCarouselData(data);
    setIsPosting(posting);
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
          {data.slice(0, 4).map((doc, i) => {
            const str = '"' + ("+" + (data.length - i).toString()) + '"';
            const overlay = i === 3 && data.length > i + 1;
            const fileType = doc.name.split(".")[
              doc.name.split(".").length - 1
            ];
            return posting ? (
              <Box
                sx={{
                  "&:after": overlay && { content: str },
                }}
                className={`grid aic jcs ${styles.image_box}`}
                onClick={posting ? handleDataPosting : handleDataView}
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
                  <Preview
                    sx={{
                      "&:hover": {
                        color: (theme) => theme.palette.primary.main,
                        cursor:"pointer"
                      },
                    }}
                  />
                </Box>
              </Box>
            ) : (
              <></>
            );
          })}
        </Masonry>
        <SecondaryIconButton
          className={`flex jcc aic g5`}
          sx={{ width: "fit-content" }}
          onClick={handleDataPosting}
        >
          <EditRounded />
          <Typography variant="h6">Edit</Typography>
        </SecondaryIconButton>
      </Box>
    )
  );
};

export default DocsGridBox;
