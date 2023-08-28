"use client"
//MUI
import { Button } from '@mui/material'

//Style
import styled from '@emotion/styled'
import { MainButton } from '../MainButton/MainButton'

export const RedButton = styled(MainButton)(({theme})=>(
    {
        backgroundColor:theme.palette.red,
        color:theme.palette.white,
        borderColor:theme.palette.red,
        "&:hover":{
            color:theme.palette.red
        }
    }
))