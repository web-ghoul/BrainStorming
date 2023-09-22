import { Container, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import authImg from "../../../public/images/auth.jpg";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import { MyBox } from "@/MUIComponents/MyBox/MyBox";
import styles from "./Auth.module.css";

const Auth = () => {
  const theme = useTheme();
  return (
    <MyBox>
      <Container className={`grid jcs aic g30 ${styles.auth_contain}`}>
        <Image src={authImg} alt={"authentication"} className={`center_x`} />
        <LoadingIcon color={theme.palette.primary.main} />
      </Container>
    </MyBox>
  );
};

export default Auth;
