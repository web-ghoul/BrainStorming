import React from "react";
import styles from "./SpecialImage.module.css";
import { Box } from "@mui/material";
import Image from "next/image";
import { Img } from "react-image";

const SpecialImage = ({
  str,
  handleDataPosting,
  handleDataView,
  img,
  posting,
  overlay,
  slider,
}) => {
  return slider ? (
    <Box sx={{position:"absolute"}} className={`center_x`}>
      <Img src={img} alt={"post"} loading="lazy" />
    </Box>
  ) : (
    <Box
      sx={{
        "&:after": overlay && { content: str },
      }}
      className={`flex aic jcc ${styles.image_box}`}
      onClick={posting ? handleDataPosting : handleDataView}
    >
      <Box
        className={`${overlay && "overlay"} ${overlay && styles.overlay} ${
          styles.back_img
        }`}
      />
      <Img src={img} alt={"post"} loading="lazy" />
    </Box>
  );
};

export default SpecialImage;
