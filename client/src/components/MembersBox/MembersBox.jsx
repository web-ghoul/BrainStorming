import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
} from "@mui/material";
import Head from "../Head/Head";
import Member from "./Member";
import styles from "./MembersBox.module.css";
import { useSelector } from "react-redux";
import { ExpandMore } from "@mui/icons-material";
const MembersBox = () => {
  const { team, isLoading } = useSelector((state) => state.team);
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    !isLoading && (
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className={`grid jcs aic  ${styles.members_box}`}
      >
        <AccordionSummary
          className={`flex jcc aic ${styles.members_box_summary}`}
          aria-controls="panel1d-content"
          id="panel1d-header"
          expandIcon={<ExpandMore />}
        >
          <Box className={`flex jcsb aic g30`}>
            <Head
              title={"Members"}
              align={"left"}
              h={"h5"}
            />
          </Box>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Box className={`grid jcs aic g10 ${styles.members}`}>
            {team.Members.map((member, i) => (
              <Member
                leader={team.TeamLeader.Name === member.Name}
                key={i}
                data={member}
              />
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    )
  );
};

export default MembersBox;
