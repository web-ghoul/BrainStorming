"use client";
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import Image from "next/image";
import backImg from "../../../public/images/team8.svg";
import shapeImg from "../../../public/images/shape.png";
import styles from "./Home.module.css";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  const handleStartClick = () => {
    router.push(`${process.env.NEXT_PUBLIC_TEAMS_PAGE}`);
  };
  
  return (
    <Container className={`grid jcs aic tac ${styles.home}`}>
      <Box className={`grid jcfs aic g10 ${styles.text}`}>
        <Box className={`flex jcfs aic ${styles.shape_box}`}>
          <Image alt="home_Image_shape" src={shapeImg} />
        </Box>
        <Typography
          variant={"h1"}
          className={`fw800 grid jcfs aic ${styles.quote}`}
        >
          Think Then... <br /> Code It.
        </Typography>
        <MainButton
          onClick={handleStartClick}
          sx={{ width: "fit-content" }}
          data-testid={"start_button"}
        >
          Start
        </MainButton>
      </Box>
      <Box className={`flex jcfe aic ${styles.image_box}`}>
        <Image alt="home_background" src={backImg} />
      </Box>
    </Container>
  );
};

export default Home;
