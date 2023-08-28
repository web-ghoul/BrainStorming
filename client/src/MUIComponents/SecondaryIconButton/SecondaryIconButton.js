"use client";
//MUI
import { MainIconButton } from "../MainIconButton/MainIconButton";
//Style
import styled from "@emotion/styled";

export const SecondaryIconButton = styled(MainIconButton)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  color: theme.palette.primary.main,
  "& svg":{
    color:theme.palette.primary.main
  }
}));
