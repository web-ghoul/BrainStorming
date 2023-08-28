"use client"
//MUI
import { SpeedDial } from '@mui/material'

//Style
import styled from '@emotion/styled'

export const MyDial = styled(SpeedDial)(({theme})=>(
    {
        color:theme.palette.white,
        padding:"10px",
        "&:hover":{
            color:theme.palette.primary.alt
        },
        [theme.breakpoints.down("md")]:{
            padding:"8px",
        },
        [theme.breakpoints.down("sm")]:{
            padding:"6px",
        },
        [theme.breakpoints.down("xs")]:{
            padding:"4px",
        }
    }
))