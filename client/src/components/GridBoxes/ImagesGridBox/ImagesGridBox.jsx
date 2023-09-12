"use client";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "./ImagesGridBox.module.css";
import Masonry from "react-masonry-css";
import { ChosenDataViewContext } from "@/context/ChosenDataViewContext";
import SpecialImage from "../../SpecialImage/SpecialImage";
import { SecondaryIconButton } from "@/MUIComponents/SecondaryIconButton/SecondaryIconButton";
import { EditRounded } from "@mui/icons-material";

const ImagesGridBox = ({ posting, data, children }) => {
  const { setShowImageFiles } = useContext(ChosenDataViewContext);
  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    768: 2,
  };
  const { setDataType, toggleDataViewer, toggleDataShow } = useContext(
    ChosenDataViewContext
  );
  const handleDataPosting = () => {
    toggleDataViewer();
    setDataType("images");
  };
  const handleDataView = (i) => {
    setShowImageFiles(data);
    setDataType("images");
    toggleDataShow();
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
          {data.slice(0, 4).map((img, i) => {
            const str = '"' + ("+" + (data.length - i).toString()) + '"';
            return posting ? (
              <SpecialImage
                handleDataPosting={handleDataPosting}
                handleDataView={handleDataView}
                str={str}
                key={i}
                overlay={i === 3 && data.length > i + 1 ? true : false}
                posting={posting}
                img={URL.createObjectURL(img)}
              />
            ) : (
              <SpecialImage
                i={i}
                handleDataPosting={handleDataPosting}
                handleDataView={handleDataView}
                str={str}
                key={i}
                overlay={i === 3 && data.length > i + 1 ? true : false}
                posting={posting}
                img={img}
              />
            );
          })}
        </Masonry>
        {posting && (
          <SecondaryIconButton
            className={`flex jcc aic g5`}
            sx={{ width: "fit-content" }}
            onClick={handleDataPosting}
          >
            <EditRounded />
            <Typography variant="h6">Edit</Typography>
          </SecondaryIconButton>
        )}
      </Box>
    )
  );
};

export default ImagesGridBox;
