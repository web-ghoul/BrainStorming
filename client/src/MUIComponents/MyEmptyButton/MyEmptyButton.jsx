"use client"
//MUI
import { Button } from '@mui/material'

//Style
import styled from '@emotion/styled'

export const MyEmptyButton = styled(Button)(({theme})=>(
    {
        backgroundColor:"transparent",
        color:theme.palette.primary.main,
        padding:"5px 20px",
        left:"50%",
        transform:"translateX(-50%)",
        [theme.breakpoints.down("md")]:{
            padding:"0px 15px",
        },
        [theme.breakpoints.down("sm")]:{
            padding:"0px 10px",
        },
        [theme.breakpoints.down("xs")]:{
            padding:"0px 5px",
        }
    }
))