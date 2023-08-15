import React from 'react'
import {Box, Typography} from '@mui/material'
import styles from "./TeamBox.module.css"
import roomImg from "../../../public/images/team4.jpg"
import Image from 'next/image'
import { MyButton } from '@/MUIComponents/MyButton/MyButton'

const TeamBox = ({data}) => {
  return (
    <Box className={`grid jcs aic ${styles.room}`}>
      <Box className={`flex jcc aic ${styles.room_image_box}`}>
        <Image width={"auto"} height={"auto"} alt="room" src={roomImg}/>
      </Box>
      <Box className={`grid jcs aic g20 ${styles.room_data}`}>
        <Box className={`grid jcfs aic`}>
          <Typography variant="h5" className={`fw700`}>{data.name}</Typography>
          <Typography variant="h6" className={`fw500 ${styles.room_description}`}>{data.description}</Typography>
        </Box>
        <Box className={`grid jcc aic ${styles.room_button}`}>
          <MyButton>Enter</MyButton>
        </Box>
      </Box>
    </Box>
  )
}

export default TeamBox
