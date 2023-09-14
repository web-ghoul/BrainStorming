import { Box } from "@mui/material";
import React from "react";

export const metadata = {
  title: "BrainStorming - Profile",
  description: "User Profile",
};

const UserLayout = ({ children }) => {
  return <Box component={"section"}>{children}</Box>;
};

export default UserLayout;
