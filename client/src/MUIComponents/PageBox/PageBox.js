//MUI
import { Box } from '@mui/material'

//Style
import styled from '@emotion/styled'

export const PageBox = styled(Box)(({theme})=>(
    {
        paddingTop:"70px",
        [theme.breakpoints.down("lg")]:{
            paddingTop:"60px",
        },
        [theme.breakpoints.down("md")]:{
            paddingTop:"50px",
        },
        [theme.breakpoints.down("sm")]:{
            paddingTop:"40px",
        },
        [theme.breakpoints.down("xs")]:{
            paddingTop:"30px",
        }
    }
))