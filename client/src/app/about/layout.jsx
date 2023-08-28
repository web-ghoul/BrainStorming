import { Box } from "@mui/material";
import React from "react";

export const metadata = {
  title: "BrainStorming - About",
  description: "App To Share Good Ideas And Projects With Our Team Members",
};

const AboutLayout = ({ children }) => {
  return <Box component={"section"}>{children}</Box>;
};

export default AboutLayout;
