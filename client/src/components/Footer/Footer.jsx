"use client"
import React from 'react'
import {Box , Container, IconButton} from "@mui/material"
import { useTheme } from '@mui/material/styles';
import Logo from '../Logo/Logo';
import styles from "./Footer.module.css"
import { Facebook, Google, Instagram, WhatsApp } from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme()
  return (
    <Box component={"footer"} className={`${styles.footer}`} sx={{backgroundColor:theme.palette.black}}>
      <Container className={`flex jcsb aic g20 ${styles.footer_contain}`}>
        <Logo title={true} color="#fff"/>
        <Box className={`flex jcfs aic g30 ${styles.links}`}>
          <IconButton>
            <Facebook sx={{color:theme.palette.facebook}}/>
          </IconButton>
          <IconButton>
            <Instagram sx={{color:theme.palette.instagram}}/>
          </IconButton>
          <IconButton>
            <WhatsApp sx={{color:theme.palette.whatsapp}}/>
          </IconButton>
          <IconButton>
            <Google sx={{color:theme.palette.gmail}} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer
