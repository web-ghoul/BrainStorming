"use client";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  useMediaQuery,
} from "@mui/material";
import Head from "../../components/Head/Head";
import TeamBox from "../../components/TeamBox/TeamBox";
import styles from "./TeamsSection.module.css";
import Image from "next/image";
import roomsSectionImg1 from "../../../public/images/brain1.png";
import { MyBox } from "@/MUIComponents/MyBox/MyBox";
import TeamsGridBox from "@/components/TeamsGridBox/TeamsGridBox";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTeams } from "@/store/teamsSlice";

const TeamsSection = () => {
  const dispatch = useDispatch();
  const { user_teams, teams } = useSelector((state) => state.teams);
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    dispatch(getTeams());
  }, []);
  return (
    <MyBox className={`${styles.rooms_section}`}>
      <Image
        alt="brain"
        src={roomsSectionImg1}
        width={200}
        height={200}
        className={`${styles.brain}`}
      />
      <Container className={`grid jcs aic g30`}>
        <Accordion
          expanded={expanded}
          onChange={handleChange}
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
            "&:before": { opacity: 0 },
            borderRadius: "4px",
            backgroundColor: (theme) => theme.palette.white,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Head special={true} title={"My Teams"} align="left" h={"h4"} />
          </AccordionSummary>
          <AccordionDetails>
            <TeamsGridBox data={user_teams} />
          </AccordionDetails>
        </Accordion>
        <Box className={`grid jcs aic g30`}>
          <Head special={true} title={"Explore Teams"} align="left" h={"h4"} />
          <TeamsGridBox data={teams} />
        </Box>
      </Container>
    </MyBox>
  );
};

export default TeamsSection;
