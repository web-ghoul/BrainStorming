import { Box } from "@mui/material";
import React from "react";

export const metadata = {
  title: "BrainStorming - Room",
  description: "App To Share Good Ideas And Projects With Our Team Members",
};

const RoomLayout = ({ children }) => {
  return <Box component={"section"}>{children}</Box>;
};

export default RoomLayout;
