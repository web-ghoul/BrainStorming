"use client";
import { Box, Typography } from "@mui/material";
import React, { useContext } from "react";
import styles from "./VideosGridBox.module.css";
import Masonry from "react-masonry-css";
import { CarouselContext } from "@/context/CarouselContext";
import { ChosenDataViewContext } from "@/context/ChosenDataViewContext";
import { SecondaryIconButton } from "@/MUIComponents/SecondaryIconButton/SecondaryIconButton";
import { EditRounded } from "@mui/icons-material";

const VideosGridBox = ({ posting, data, children }) => {
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
    setDataType("videos");
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
          {data.slice(0, 4).map((vid, i) => {
            const str = '"' + ("+" + (data.length - i).toString()) + '"';
            const overlay = i === 3 && data.length > i + 1;
            return posting ? (
              <Box
                sx={{
                  "&:after": overlay && { content: str },
                }}
                className={`flex aic jcc ${styles.image_box}`}
                onClick={posting ? handleDataPosting : handleDataView}
              >
                <Box
                  className={`${overlay && "overlay"} ${
                    overlay && styles.overlay
                  }`}
                />
                <video loading="lazy" controls>
                  <source src={URL.createObjectURL(vid)} />
                </video>
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

export default VideosGridBox;
