"use client";
//MUI
import { SpecialIconButton } from "../SpecialIconButton/SpecialIconButton";

//Style
import styled from "@emotion/styled";

export const SpecialIconButtonWithText = styled(SpecialIconButton)(
  ({ theme }) => ({
    width: "fit-content",
    borderRadius: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor:"none",
    gap: "10px",
    [theme.breakpoints.down("md")]: {
      width: "fit-content",
    },
    [theme.breakpoints.down("sm")]: {
      width: "fit-content",
    },
    [theme.breakpoints.down("xs")]: {
      width: "fit-content",
    },
  }),
);
