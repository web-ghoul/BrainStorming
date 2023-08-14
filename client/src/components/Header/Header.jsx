"use client"
import React from 'react'
import {AppBar,Box,Container, IconButton,useMediaQuery,List,ListItem,ListItemButton,ListItemText} from '@mui/material'
import {Menu} from "@mui/icons-material"
import styles from "./Header.module.css"
import Logo from '../Logo/Logo'
import Link from 'next/link'

const Header = ({toggleDrawer}) => {
  const smallSize =  useMediaQuery("(max-width:768px)")
  return (
    <AppBar color="primary" className={`${styles.header}`}>
      <Container sx={{height:{lg:"70px",md:"60px",sm:"50px",xs:"40px"}}} className={`flex jcsb aic g30 ${styles.header_contain}`}>
        <Logo title={true} color={"#fff"}/>
          {
            smallSize ? (
              <List sx={{padding:0}} className={`flex jcfe aic g10`}>
                  <ListItem sx={{padding:0}}>
                    <ListItemButton sx={{padding:0}} onClick={toggleDrawer(true)}>
                      <Menu/>
                    </ListItemButton>
                  </ListItem>
              </List>
            ):
            (
              <List sx={{padding:0}} className={`flex jcfe aic g30`}>
                  <ListItem sx={{padding:0}}>
                    <Link href="/">
                      <ListItemButton>
                        <ListItemText primary={'Home'} />
                      </ListItemButton>
                    </Link>
                  </ListItem>

                  <ListItem sx={{padding:0}}>
                    <Link href="/teams">
                      <ListItemButton>
                        <ListItemText primary={'Teams'} />
                      </ListItemButton>
                    </Link>
                  </ListItem>

                  <ListItem sx={{padding:0}}>
                    <Link href="/about">
                      <ListItemButton>
                        <ListItemText primary={'About'} />
                      </ListItemButton>
                    </Link>
                  </ListItem>
              </List>
            )
          }
      </Container>
    </AppBar>
  )
}

export default Header
