import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FavoriteRounded } from "@mui/icons-material";

const Member = ({ data }) => {
  const theme = useTheme();
  return (
    <Box className={`flex flex-wrap jcsb aic g50 `}>
      <Box className={`flex jcfs aic g5`}>
        <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
          {data.name}
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.gray }}>
          ({data.role})
        </Typography>
      </Box>
      <Typography variant="h6" className={`fw500 flex jcc g5 aic `}>
        {data.loves} <FavoriteRounded sx={{ color: theme.palette.youtube }} />
      </Typography>
    </Box>
  );
};

export default Member;
