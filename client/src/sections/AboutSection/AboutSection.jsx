import Developer from "@/components/Developer/Developer";
import { Box } from "@mui/material";
import amrImg from "../../../public/images/amr.png";
import webGhoulImg from "../../../public/images/webGhoul.png";
import React from "react";
import Header from "@/components/Header/Header";

const AboutSection = () => {
  const developers = [
    {
      name: "Mahmoud Salama",
      nickName: "webGhoul",
      role: "Frontend Developer",
      links: {
        gmail: "",
        whatsapp: "",
        resume: "",
        linkedin: "",
        facebook: "",
      },
      img: webGhoulImg,
    },
    {
      name: "Amr Khaled",
      nickName: "Amr006",
      role: "Backend Developer",
      links: {
        gmail: "",
        whatsapp: "",
        resume: "",
        linkedin: "",
        facebook: "",
      },
      img: amrImg,
    },
  ];
  return (
    <Box className={`grid jcs aic g30`}>
      <Header title={"About Us"} special={true} align={"center"} />
      {developers.map((dev) => (
        <Developer dev={dev} />
      ))}
    </Box>
  );
};

export default AboutSection;
