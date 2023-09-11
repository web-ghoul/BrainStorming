import { Box, Skeleton, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import TeamBox from "../../TeamBox/TeamBox";
import styles from "./TeamsGridBox.module.css";
import LoadingTeamBox from "../../TeamBox/LoadingTeamBox";

const LoadingTeamsGridBox = () => {
  const smallSize = useMediaQuery("(max-width:768px)");
  const verySmallSize = useMediaQuery("(max-width:640px)");
  const data = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box className={`grid jcs aifs g20 ${styles.rooms_box}`}>
      {verySmallSize ? (
        <Box className={`grid jcs aic g20 ${styles.rooms}`}>
          {data.map((_, i) => (
            <LoadingTeamBox key={i} />
          ))}
        </Box>
      ) : smallSize ? (
        <>
          <Box className={`grid jcs aic g20 ${styles.rooms}`}>
            {data.map((_, i) => i % 2 === 0 && <LoadingTeamBox key={i} />)}
          </Box>
          <Box className={`grid jcs aic g20 ${styles.rooms}`}>
            {data.map((_, i) => i % 2 !== 0 && <LoadingTeamBox key={i} />)}
          </Box>
        </>
      ) : (
        <>
          <Box className={`grid jcs aic g20 ${styles.rooms}`}>
            {data.map(
              (_, i) => (i === 0 || i % 3 === 0) && <LoadingTeamBox key={i} />
            )}
          </Box>
          <Box className={`grid jcs aic g20 ${styles.rooms}`}>
            {data.map(
              (_, i) =>
                (i - 1 === 0 || (i - 1) % 3 === 0) && <LoadingTeamBox key={i} />
            )}
          </Box>
          <Box className={`grid jcs aic g20 ${styles.rooms}`}>
            {data.map(
              (_, i) =>
                (i - 2 === 0 || (i - 2) % 3 === 0) && <LoadingTeamBox key={i} />
            )}
          </Box>
        </>
      )}
    </Box>
  );
};

export default LoadingTeamsGridBox;
