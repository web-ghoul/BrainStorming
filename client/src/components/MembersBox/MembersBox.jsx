import React from "react";
import { Box, Divider } from "@mui/material";
import Head from "../Head/Head";
import Member from "../Member/Member";
import styles from "./MembersBox.module.css";

const MembersBox = () => {
  const data = [
    {
      name: "webGhoul",
      loves: 5,
      role: "Leader",
    },
    {
      name: "Amr006",
      loves: 6,
      role: "Member",
    },
    {
      name: "Amr006",
      loves: 6,
      role: "Member",
    },
    {
      name: "Amr006",
      loves: 6,
      role: "Member",
    },
    {
      name: "Amr006",
      loves: 6,
      role: "Member",
    },
  ];
  return (
    <Box className={`grid jcs aic ${styles.members_box}`}>
      <Head title={"Members"} align={"center"} h={"h5"} />
      <Divider variant="fullWidth" orientation="horizontal" />
      <Box className={`grid jcs aic g10 ${styles.members}`}>
        {data.map((member, i) => (
          <Member key={i} data={member} />
        ))}
      </Box>
    </Box>
  );
};

export default MembersBox;
