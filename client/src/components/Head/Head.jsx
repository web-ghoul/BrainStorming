import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./Head.module.css";

const Head = ({ title, align, h, color }) => {
  return (
    <Box
      className={`flex aic ${
        align === "center" ? "jcc" : align === "left" ? "jcfs" : "jcfe"
      } ${styles.head}`}
    >
      <Typography
        sx={{ textAlign: { align }, color: color ? color : "#333" }}
        variant={h}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Head;
