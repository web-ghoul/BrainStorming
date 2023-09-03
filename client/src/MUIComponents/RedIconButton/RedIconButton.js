"use client"
//MUI
import { Button } from '@mui/material'

//Style
import styled from '@emotion/styled'
import { MainIconButton } from '../MainIconButton/MainIconButton'

export const RedIconButton = styled(MainIconButton)(({theme})=>(
    {
        backgroundColor:theme.palette.red,
        color:theme.palette.white,
        borderColor:theme.palette.red,
        '&:hover':{
            color:theme.palette.red
        },
        '&:hover svg':{
            color:theme.palette.red
        }
    }
))