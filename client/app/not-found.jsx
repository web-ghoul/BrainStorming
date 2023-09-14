"use client"
import { Container } from "@mui/material";
import React from "react";
import errorImg from "../public/images/error3.jpg";
import Image from "next/image";
import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import { MyBox } from "@/MUIComponents/MyBox/MyBox";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter()
  return (
    <MyBox>
      <Container className={`grid jcc aic g30 error_contain`}>
        <Image src={errorImg} alt="404" />
        <MainButton onClick={()=>router.push("/")}>Go to Home</MainButton>
      </Container>
    </MyBox>
  );
};

export default NotFound;
