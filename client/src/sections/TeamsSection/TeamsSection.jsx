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
import roomsSectionImg1 from "../../../public/images/brain1.jpg";
import { MyBox } from "@/MUIComponents/MyBox/MyBox";
import TeamsGridBox from "@/components/TeamsGridBox/TeamsGridBox";
import { ExpandMore } from "@mui/icons-material";

const TeamsSection = () => {
  const data = [
    {
      name: "webGhoul",
      description: "Room ssss sssssss ffffffff aaaaaaaaa for Our Team",
    },
    {
      name: "webGhoul1",
      description:
        "Roomsss ssssss sssss ssssssss sssss sssssss ssssss sssss sssssfor Our Team",
    },
    {
      name: "webGhoul2",
      description: "Room for Our Team",
    },
    {
      name: "webGhoul3",
      description: "Roomd ffffffff wwwwwwwwww rrrrrr for Our Team",
    },
    {
      name: "webGhoul4",
      description:
        "Room ssssssss sssssssss sssssss sssssssss ssssssssfor Our Team",
    },
    {
      name: "webGhoul5",
      description: "ssssssssssssssssssssssRoom for Our Team",
    },
  ];
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };
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
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMore />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Head title={"My Teams"} align="left" h={"h4"} />
          </AccordionSummary>
          <AccordionDetails>
            <TeamsGridBox data={data} />
          </AccordionDetails>
        </Accordion>
        <Box></Box>
        <Box>
          <Head title={"Explore Teams"} align="left" h={"h4"} />
          <TeamsGridBox data={data} />
        </Box>
      </Container>
    </MyBox>
  );
};

export default TeamsSection;
