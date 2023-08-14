import { Box, ThemeProvider } from '@mui/material'
import React from 'react'

export const metadata = {
  title: "BrainStorming - Login",
  description: "Login To BrainStorming",
};

const LoginLayout = ({children}) => {
  return (
    <Box component={"section"}>
      {children}
    </Box>
  )
}

export default LoginLayout