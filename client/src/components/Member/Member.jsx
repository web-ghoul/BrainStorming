import React from 'react'
import {Box, Typography} from '@mui/material'
import {useTheme} from '@mui/material/styles'
import styles from "./Member.module.css"
import { FavoriteRounded } from '@mui/icons-material'

const Member = ({data}) => {
    const theme = useTheme()
  return (
    <Box className={`flex flex-wrap jcsb aic g50 ${styles.member_box}`}>
        <Box className={`flex jcfs aic g5`}>
            <Typography variant="h6" sx={{color:theme.palette.primary.main}} className={`${styles.member_name}`}>{data.name}</Typography>
            <Typography variant="h6" sx={{color:theme.palette.gray}} className={`fw500 ${styles.member_role}`}>({data.role})</Typography>
        </Box>
        <Typography variant="h6" className={`fw500 flex jcc g5 aic ${styles.member_loves}`}>{data.loves} <FavoriteRounded sx={{color:theme.palette.youtube}}/></Typography>
    </Box>
  )
}

export default Member
