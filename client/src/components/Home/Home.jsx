import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import Link from "next/link";
import Image from "next/image";
import backImg from "../../../public/images/team8.svg";
import shapeImg from "../../../public/images/shape.png";
import styles from "./Home.module.css";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter()
  return (
    <Container className={`grid jcs aic tac ${styles.home}`}>
      <Box className={`grid jcfs aic g10 ${styles.text}`}>
        <Box className={`flex jcfs aic ${styles.shape_box}`}>
          <Image alt="shape" src={shapeImg} />
        </Box>
        <Typography
          variant={"h1"}
          className={`fw800 grid jcfs aic ${styles.quote}`}
        >
          Think Then... <br /> Code It.
        </Typography>
        <MainButton
          onClick={() => router.push(process.env.NEXT_PUBLIC_TEAMS_PAGE)}
          sx={{ width: "fit-content" }}
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
