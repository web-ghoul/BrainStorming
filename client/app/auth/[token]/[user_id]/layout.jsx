import { Box } from "@mui/material";
import React from "react";

export const metadata = {
  title: "BrainStorming - Authentication",
  description: "User Authentication",
};

const AuthLayout = ({ children }) => {
  return <Box component={"section"}>{children}</Box>;
};

export default AuthLayout;
