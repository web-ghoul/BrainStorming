//MUI
import { Box } from "@mui/material";

//Style
import styled from "@emotion/styled";

export const MyBox = styled(Box)(({ theme }) => ({
  paddingBottom: "40px",
  paddingTop: "40px",
  [theme.breakpoints.down("md")]: {
    paddingBottom: "30px",
    paddingTop: "30px"
  },
  [theme.breakpoints.down("sm")]: {
    paddingBottom: "20px",
    paddingTop: "20px",
  },
  [theme.breakpoints.down("xs")]: {
    paddingBottom: "10px",
    paddingTop: "10px",
  },
}));
