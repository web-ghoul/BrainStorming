"use client"
import Header from '../components/Header/Header'
import './globals.css'
import {Container,Box} from '@mui/material'
import Footer from '../components/Footer/Footer'
import Sidebar from '../components/Sidebar/Sidebar'
import { useEffect, useState } from 'react'
import {theme} from "./theme"
import { ThemeProvider } from "@emotion/react"

export default function RootLayout({ children }) {
  const [page,setPage] = useState(children.props.childProp.segment)

  const [open,setOpen] = useState(false)
  
  const toggleDrawer = (o) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(o)
  };

  useEffect(()=>{
    setPage(children.props.childProp.segment)
  },[page])
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900;1000&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Box component={"main"}>
            <Sidebar toggleDrawer={toggleDrawer} open={open} setOpen={setOpen}/>
            {(page !== "login" && page !== "register") && <Header toggleDrawer={toggleDrawer}/>}
            {children}
            {(page !== "login" && page !== "register") && <Footer/>}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  )
}
