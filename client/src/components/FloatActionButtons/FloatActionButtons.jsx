import React, { useContext } from "react";
import { Box, Fab } from "@mui/material";
import styles from "./FloatActionButtons.module.css";
import { TeamModalContext } from "@/context/TeamModalContext";
import { ExpandLessRounded, GroupAddRounded } from "@mui/icons-material";

const FloatActionButtons = () => {
  const { handleToggleAddNewTeamModal } = useContext(TeamModalContext);
  const data = [
    {
      fun: handleToggleAddNewTeamModal,
      icon: <GroupAddRounded />,
    },
    {
      fun: () =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        }),
      icon: <ExpandLessRounded />,
    },
  ];
  return (
    <Box className={`grid jcc aic g20 ${styles.fabs}`}>
      {data.map((fab, i) => (
        <Fab onClick={fab.fun} key={i} color="primary">
          {fab.icon}
        </Fab>
      ))}
    </Box>
  );
};

export default FloatActionButtons;
