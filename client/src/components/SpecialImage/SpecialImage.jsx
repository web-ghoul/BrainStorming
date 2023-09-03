import React from "react";
import styles from "./SpecialImage.module.css";
import { Box } from "@mui/material";
import Image from "next/image";

const SpecialImage = ({
  str,
  handleDataPosting,
  handleDataView,
  img,
  posting,
  overlay,
}) => {
  return (
    <Box
      sx={{
        "&:after": overlay && { content: str },
      }}
      className={`flex aic jcc ${styles.image_box}`}
      onClick={posting ? handleDataPosting : handleDataView}
    >
      <Box
        // sx={{
        //   backgroundImage: posting ? `url(${img})` : `url(${img.src})`,
        // }}
        className={`${overlay && "overlay"} ${overlay && styles.overlay} ${
          styles.back_img
        }`}
      />
      <Image src={img} height={200} width={200} alt={"post"} loading="lazy" />
    </Box>
  );
};

export default SpecialImage;
