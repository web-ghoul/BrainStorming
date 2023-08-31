import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FavoriteRounded } from "@mui/icons-material";

const Member = ({ data }) => {
  const theme = useTheme();
  return (
    <Box className={`flex jcc aic g5`}>
      <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
        {data.name}
      </Typography>
      <Typography variant="h6" sx={{ color: theme.palette.gray }}>
        ({data.role})
      </Typography>
    </Box>
  );
};

export default Member;
