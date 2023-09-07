"use client";
import React from "react";
import {
  SentimentSatisfiedRounded,
  AttachFileRounded,
} from "@mui/icons-material";
import { Box, IconButton, Skeleton } from "@mui/material";

const LoadingCreateSpark = () => {
  return (
    <>
      <Box className={`grid jcs aic g20`}>
        <Box className={`grid jcs aic g5`}>
          <Box className={`flex jcs aic g5`}>
            <Skeleton variant="rectangular" height={100} width={"100%"} />
          </Box>
        </Box>
        <Box>
          <Box className={`flex jcs aifs g5`}>
            <Skeleton variant="rectangular" height={100} width={"100%"} />
          </Box>
        </Box>
        <Skeleton variant="rectangular" height={50} width={"100%"} />
      </Box>
    </>
  );
};

export default LoadingCreateSpark;
