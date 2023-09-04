import { CarouselContext } from "@/context/CarouselContext";
import { Box, Modal } from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styles from "./CarouselSlider.module.css";
import { Close } from "@mui/icons-material";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
import SpecialImage from "../SpecialImage/SpecialImage";

const CarouselSlider = () => {
  const { data, openCarousel, selectedItem, handleToggleCarousel } = useContext(
    CarouselContext
  );
  return (
    <Modal
      onClose={handleToggleCarousel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      open={openCarousel}
    >
      <Box className={`grid jcs aic g10 ${styles.modal_carousel}`}>
        <MainIconButton onClick={handleToggleCarousel}>
          <Close />
        </MainIconButton>
        <Carousel infiniteLoop={true}>
          {data &&
            data.map((img, i) => (
              <SpecialImage key={i} img={img} slider={true} />
            ))}
        </Carousel>
      </Box>
    </Modal>
  );
};

export default CarouselSlider;
