"use client"
//MUI
import { Button } from '@mui/material'

//Style
import styled from '@emotion/styled'

export const MainButton = styled(Button)(({theme})=>(
    {
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.white,
        padding:"2px 30px",
        zIndex:5,
        minWidth:"auto",
        borderWidth:"2px",
        borderStyle:"solid",
        borderColor:theme.palette.primary.main,
        "&:hover":{
            color:theme.palette.primary.main,
            backgroundColor:"transparent"
        },
        [theme.breakpoints.down("md")]:{
            padding:"1px 15px",
        },
        [theme.breakpoints.down("sm")]:{
            padding:"0px 10px",
        },
        [theme.breakpoints.down("xs")]:{
            padding:"0px 5px",
        }
    }
))