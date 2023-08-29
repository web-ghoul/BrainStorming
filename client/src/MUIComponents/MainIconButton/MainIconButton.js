"use client"
//MUI
import { IconButton } from '@mui/material'

//Style
import styled from '@emotion/styled'

export const MainIconButton = styled(IconButton)(({theme})=>(
    {
        backgroundColor:theme.palette.primary.main,
        color:theme.palette.white,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:"5px",
        padding:"2px 20px",
        borderWidth:"2px",
        borderStyle:"solid",
        borderColor:theme.palette.primary.main,
        zIndex:5,
        minWidth:"auto",
        borderRadius:"4px",
        "&:hover":{
            color:theme.palette.primary.main,
            backgroundColor:"transparent",
            "& svg":{
                color:theme.palette.primary.main
            },
        },
        "& svg":{
            fontSize:"20px",
            color:theme.palette.white
        },
        [theme.breakpoints.down("md")]:{
            padding:"1px 15px",
            "&.svg":{
                fontSize:"15px",
            },
        },
        [theme.breakpoints.down("sm")]:{
            padding:"0px 10px",
            "&.svg":{
                fontSize:"10px",
            },
        },
        [theme.breakpoints.down("xs")]:{
            padding:"0px 5px",
            "&.svg":{
                fontSize:"5px",
            },
        }
    }
))