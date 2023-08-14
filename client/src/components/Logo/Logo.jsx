import React from 'react'
import {Box, Typography, IconButton} from '@mui/material'
import styles from "./Logo.module.css"
import logoImg from "../../../public/images/logo.jpg"
import Image from 'next/image'
import Link from 'next/link'

const Logo = ({title,color}) => {
  return (
    <Link href={"/"}>
      <IconButton className={`flex jcfs aic g10 ${styles.logo}`}>
          <Image alt="logo" src={logoImg}/>
          {
            title && 
            (
              <Typography variant="h6" sx={{color:color}} className={`fw700`}>BrainStorming</Typography>
            )
          }  
      </IconButton>
    </Link>
  )
}

export default Logo
