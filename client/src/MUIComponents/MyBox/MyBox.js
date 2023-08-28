//MUI
import { Box } from "@mui/material";

//Style
import styled from "@emotion/styled";

export const MyBox = styled(Box)(({ theme }) => ({
  paddingBottom: "20px",
  paddingTop: "20px",
  [theme.breakpoints.down("md")]: {
    paddingBottom: "15px",
    paddingTop: "15px"
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "10px",
    paddingTop: "10px",
  },
  [theme.breakpoints.down("xs")]: {
    paddingBottom: "5px",
    paddingTop: "5px",
  },
}));
