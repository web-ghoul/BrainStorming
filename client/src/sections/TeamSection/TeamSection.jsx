"use client";
import React from "react";
import "../../app/globals.css";
import PropTypes from "prop-types";
import { Tabs, Tab, Box, Container } from "@mui/material";
import Head from "@/components/Head/Head";
import CreateIdeaSection from "./CreateIdeaSection/CreateIdeaSection";
import SparksSection from "./SparksSection/SparksSection";
import styles from "./TeamSection.module.css";
import roomImg from "../../../public/images/team3.jpg";
import { MyBox } from "@/MUIComponents/MyBox/MyBox";
import MembersBox from "@/components/MembersBox/MembersBox";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Container>
          <MyBox className={`grid jcs aifs g30 ${styles.grid_layout}`}>
            <MembersBox />
            {children}
          </MyBox>
        </Container>
      )}
    </Box>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TeamSection = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={`grid jcs aic`}>
      <Box
        className={`grid jcc aife ${styles.room_head}`}
        sx={{ backgroundImage: `url(${roomImg.src})` }}
      >
        <Head title={"webGhoul Room"} align="center" color="#fff" h="h2" />
        <Tabs
          value={value}
          centered
          onChange={handleChange}
          aria-label="basic tabs example"
          className={`flex jcc aic ${styles.tabs}`}
        >
          <Tab label="Create a Spark" {...a11yProps(0)} />
          <Tab label="Sparks" {...a11yProps(1)} />
        </Tabs>
        <Box className={"overlay"}></Box>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <CreateIdeaSection />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {/* <SparksSection /> */}
      </CustomTabPanel>
    </Box>
  );
};

export default TeamSection;
