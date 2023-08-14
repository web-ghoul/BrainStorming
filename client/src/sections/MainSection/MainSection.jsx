"use client"
import React,{useEffect, useState} from 'react'
import styles from "./MainSection.module.css"
import {Box,Typography,Container,Button} from '@mui/material'
import { MyButton } from '@/MUIComponents/MyButton/MyButton'
import Link from 'next/link'

const MainSection = () => {
  return (
    <Box className={`${styles.main_section}`}>
      <Container sx={{height:{lg:window.innerHeight-71,md:window.innerHeight-61,sm:window.innerHeight-51,xs:window.innerHeight-41}}} className={`grid jcc aic tac ${styles.main_section_contain}`}>
          <Box className={"overlay"}></Box>
          <Box className={`grid jcc aic tac`}>
            <Typography variant={"h1"} className={`${styles.quote}`}>Think Then... <br/> Code It.</Typography>
            <MyButton sx={{width:"fit-content"}}>
              <Link href="/teams">Start</Link>
            </MyButton>
          </Box>
      </Container>
    </Box>
  )
}

export default MainSection
