import React from "react"
import {Box} from '@mui/material'
import MainSection from "@/sections/MainSection/MainSection"

export const metadata = {
  title: "BrainStorming",
  description: "App for help student to share our ideas with our teams",
};

export default function Home() {
  return (
    <Box>
      <MainSection/>
    </Box>
  )
}
