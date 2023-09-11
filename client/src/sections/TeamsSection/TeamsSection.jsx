"use client";
import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
} from "@mui/material";
import Head from "../../components/Head/Head";
import styles from "./TeamsSection.module.css";
import Image from "next/image";
import roomsSectionImg1 from "../../../public/images/brain1.png";
import { MyBox } from "@/MUIComponents/MyBox/MyBox";
import TeamsGridBox from "@/components/GridBoxes/TeamsGridBox/TeamsGridBox";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTeams } from "@/store/teamsSlice";
import LoadingTeamsGridBox from "@/components/GridBoxes/TeamsGridBox/LoadingTeamsGridBox";

const TeamsSection = () => {
  const dispatch = useDispatch();
  const { user_teams, teams, isLoading } = useSelector((state) => state.teams);
  const { signed } = useSelector((state) => state.auth);
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
        {signed && user_teams && (
          <Accordion
            expanded={expanded}
            onChange={handleChange}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Head
                special={true}
                title={"My Teams"}
                align={"left"}
                h={"h4"}
              />
            </AccordionSummary>
            <AccordionDetails>
              {isLoading ? (
                <LoadingTeamsGridBox />
              ) : (
                <TeamsGridBox data={user_teams} />
              )}
            </AccordionDetails>
          </Accordion>
        )}
        <Box className={`grid jcs aic g30`}>
          <Head
            special={true}
            title={"Explore Teams"}
            align="left"
            h={"h4"}
          />
          {isLoading ? <LoadingTeamsGridBox /> : <TeamsGridBox data={teams} />}
        </Box>
      </Container>
    </MyBox>
  );
};

export default TeamsSection;
