"use client";
//MUI
import { IconButton } from "@mui/material";

//Style
import styled from "@emotion/styled";

export const SpecialIconButton = styled(IconButton)(({ theme }) => ({
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  backgroundColor: theme.palette.white,
  "&:hover":{
    backgroundColor:theme.palette.white
  },
  "&:focus": {
    boxShadow:
      " rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
  },
  "& svg": {
    fontSize: "30px",
  },
  [theme.breakpoints.down("md")]: {
    width: "35px",
    height: "35px",
    "& svg": {
      fontSize: "25px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "30px",
    height: "30px",
    "& svg": {
      fontSize: "20px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    width: "20px",
    height: "20px",
    "& svg": {
      fontSize: "18px",
    },
  },
}));
