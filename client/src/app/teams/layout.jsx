import React from "react";
import { Box } from "@mui/material";

export const metadata = {
  title: "BrainStorming - Rooms",
  description: "App To Share Good Ideas And Projects With Our Team Members",
};

const RoomsLayout = ({ children }) => {
  return <Box component={"section"}>{children}</Box>;
};

export default RoomsLayout;
