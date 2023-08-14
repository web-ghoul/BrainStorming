import React from 'react'
import {Box, Typography} from '@mui/material'
import {InsertDriveFile} from '@mui/icons-material';
import styles from "./FileBox.module.css"

const FileBox = ({title}) => {
  return (
    <Box className={`flex jcfs aic g10 ${styles.file}`}>
        <InsertDriveFile/>
        <Typography variant="h6">{title}</Typography>
    </Box>
  )
}

export default FileBox
