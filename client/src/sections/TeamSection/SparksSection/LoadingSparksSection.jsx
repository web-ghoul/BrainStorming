import React from "react";
import { Box } from "@mui/material";
import LoadingSpark from "@/components/Spark/LoadingSpark";

const LoadingSparksSection = () => {
  const len = Math.floor(Math.random() * 6) + 5;
  return (
    <Box className={`grid jcs aic g30`}>
      {Array.from({ length: len }, () => 0).map((_, i) => (
        <LoadingSpark key={i} />
      ))}
    </Box>
  );
};

export default LoadingSparksSection;
