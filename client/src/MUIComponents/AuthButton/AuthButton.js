"use client";
//MUI
import { SpecialIconButton } from "../SpecialIconButton/SpecialIconButton";

//Style
import styled from "@emotion/styled";

export const AuthButton = styled(SpecialIconButton)(({ theme }) => ({
  boxShadow:
    "rgba(0, 0, 0, 0.4) 0px 2px 4px,rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,rgba(0, 0, 0, 0.2) 0px -3px 0px inset",
  width: "100%",
  height: "100%",
  borderRadius: "6px",
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
    width: "100%",
    height: "100%",
    "& svg": {
      fontSize: "25px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
    "& svg": {
      fontSize: "20px",
    },
  },
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    height: "100%",
    "& svg": {
      fontSize: "18px",
    },
  },
}));
