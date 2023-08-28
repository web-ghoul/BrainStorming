"use client";
//MUI
import { MainButton } from "../MainButton/MainButton";
//Style
import styled from "@emotion/styled";

export const SecondaryButton = styled(MainButton)(({ theme }) => ({
  backgroundColor: theme.palette.white,
  color: theme.palette.primary.main,
  "&:hover": {
    color: theme.palette.white,
    backgroundColor: theme.palette.primary.main,
  },
}));
