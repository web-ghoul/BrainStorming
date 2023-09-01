import React, { useContext } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { BackLoadingContext } from "@/context/BackLoadingContext";

const BackLoading = () => {
  const { openBackLoading } = useContext(BackLoadingContext);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.modal + 1 }}
      open={openBackLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackLoading;
