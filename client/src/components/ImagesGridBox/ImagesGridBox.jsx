"use client";
import { Box } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./ImagesGridBox.module.css";
import Masonry from "react-masonry-css";
import { CarouselContext } from "@/context/CarouselContext";

const ImagesGridBox = ({ data }) => {
  const breakpointColumnsObj = {
    default: 4,
    992: 3,
    768: 2,
  };
  const { handleToggleCarousel, getCarouselData } = useContext(CarouselContext);
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={`flex jcs aifs g10 ${styles.masonry_grid}`}
      columnClassName={"masonry_col_grid"}
    >
      {data.slice(0, 4).map((img, i) => {
        const str = '"' + ("+" + (data.length - i).toString()) + '"';
        return (
          <Box
            key={i}
            sx={{
              "&:after": i === 3 && data.length > i + 1 && { content: str },
            }}
            className={`flex aic jcc ${styles.image_box}`}
            onClick={() => {
              handleToggleCarousel(i);
              getCarouselData(data);
            }}
          >
            {i === 3 && data.length > i + 1 && (
              <Box className={`overlay ${styles.overlay}`} />
            )}
            <Box
              sx={{ backgroundImage: `url(${img.src})` }}
              className={`${styles.back_img}`}
            />
            <Image src={img} height={200} alt={"post"} loading="lazy" />
          </Box>
        );
      })}
    </Masonry>
  );
};

export default ImagesGridBox;
