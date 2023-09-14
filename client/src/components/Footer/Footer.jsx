"use client";
import React from "react";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "../Logo/Logo";
import styles from "./Footer.module.css";
import { Facebook, Google, Instagram, WhatsApp } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box component={"footer"} className={`${styles.footer}`}>
      <Container className={`grid jcs aic g20 ${styles.footer_contain}`}>
        <Logo title={true} align={"center"} color="#fff" />
        <Box className={`flex aic jcsb g20 ${styles.footer_foot}`}>
          <Typography className={`fw500`} variant="h6" sx={{ color: "#fff" }}>
            © 2023 BrainStorming.  All Rights Reserved.
          </Typography>
          <Box className={`flex jcsb aic g30  ${styles.links}`}>
            <Link href={process.env.NEXT_PUBLIC_HOME_PAGE}>
              <Typography variant="h6" className={`fw500`}>
                Home
              </Typography>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_TEAMS_PAGE}>
              <Typography variant="h6" className={`fw500`}>
                Teams
              </Typography>
            </Link>
            <Link href={process.env.NEXT_PUBLIC_ABOUT_PAGE}>
              <Typography variant="h6" className={`fw500`}>
                About
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
