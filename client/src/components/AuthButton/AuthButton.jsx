import { Button, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import styles from "./AuthButton.module.css"
import { useTheme } from '@mui/material/styles'

const AuthButton = ({img , text}) => {
    const theme = useTheme()
    return (
        <Button fullWidth className={`flex jcc aic g10 ${styles.auth_button}`}>
            <Image src={img} alt="auth"/>
            <Typography variant='h6' sx={{color:theme.palette.black}}>{text}</Typography>
        </Button>
    )
}

export default AuthButton
