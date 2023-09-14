import React from 'react'
import { Divider ,Box,Typography} from '@mui/material'
import styles from "./Or.module.css" 

const Or = () => {
  return (
    <Box className={`flex jcc aic ${styles.or_box}`}>
      <Typography variant="h6" className='tac'>Or</Typography>
      <Divider/>
    </Box>
  )
}

export default Or
