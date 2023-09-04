import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { AdminPanelSettings, Person } from "@mui/icons-material";

const Member = ({ leader, data }) => {
  const theme = useTheme();
  return (
    <Box className={`flex jcc aic g10`}>
      <Typography variant="h6" sx={{ color: theme.palette.primary.main }}>
        {data.Name}
      </Typography>
      {leader ? (
        <AdminPanelSettings
          sx={{ color: (theme) => theme.palette.primary.main }}
        />
      ) : (
        <Person sx={{ color: (theme) => theme.palette.primary.main }} />
      )}
    </Box>
  );
};

export default Member;
