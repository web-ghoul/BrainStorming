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
import TeamsGridBox from "@/components/TeamsGridBox/TeamsGridBox";
import { ExpandMore } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTeams } from "@/store/teamsSlice";
import LoadingTeamsGridBox from "@/components/TeamsGridBox/LoadingTeamsGridBox";
import { useContext } from "react";
import { MyThemeContext } from "@/context/MyThemeContext";

const TeamsSection = () => {
  const { mode } = useContext(MyThemeContext);
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
            sx={{
              boxShadow: (theme) =>
                theme.palette.mode === "dark"
                  ? "rgb(3, 126, 243,0.2) 0px 5px 10px;"
                  : "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              "&:before": { opacity: 0 },
              borderRadius: "4px",
              color: (theme) => theme.palette.black,
              backgroundColor: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.white
                  : theme.palette.primary.main,
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Head
                color={mode === "dark" ? "#fff" : "#000"}
                special={true}
                specialColor={mode === "dark" && "#000"}
                title={"My Teams"}
                align="left"
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
            color={mode === "dark" ? "#fff" : "#000"}
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
