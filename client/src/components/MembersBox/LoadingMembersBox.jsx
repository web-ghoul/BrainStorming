import React from "react";
import { Box, Divider, Skeleton, useMediaQuery } from "@mui/material";
import styles from "./MembersBox.module.css";
import LoadingMember from "./LoadingMember";

const LoadingMembersBox = () => {
  const smallSize = useMediaQuery("(max-width:768px)");
  const len = Math.floor(Math.random() * 6) + 5;
  return (
    <Box
      className={`grid jcs aic ${styles.members_box} ${styles.loading_members_box}`}
    >
      <Skeleton variant="text" height={100} width={"100%"} />
      <Divider variant="fullWidth" orientation="horizontal" />
      <Box className={`grid jcs aic g10 ${styles.members}`}>
        {smallSize ? (
          <>
            {Array.from({ length: len }, () => 0).map((_, i) => (
              <LoadingMember key={i} />
            ))}
            <Box className={`flex flex_wrap jcc aic g10`}>
              {Array.from({ length: len }, () => 0).map((_, i) => (
                <LoadingMember key={i} />
              ))}
            </Box>
          </>
        ) : (
          Array.from({ length: len }, () => 0).map((_, i) => (
            <LoadingMember key={i} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default LoadingMembersBox;
