import React from "react";
import sparkImg1 from "../../../../public/images/brain5.jpg";
import sparkImg2 from "../../../../public/images/0c649a86-362c-4deb-9ac6-966f99d5d50e.jpg";
import avatarImg1 from "../../../../public/images/avatar1.jpg";
import avatarImg2 from "../../../../public/images/avatar2.jpg";
import avatarImg3 from "../../../../public/images/avatar3.jpg";
import avatarImg4 from "../../../../public/images/avatar4.jpg";
import avatarImg5 from "../../../../public/images/avatar5.jpg";
import { Box, Container } from "@mui/material";
import Spark from "@/components/Spark/Spark";

const SparksSection = () => {
  const data = [
    {
      avatar: avatarImg1,
      username: "webGhoul",
      drop: "Drops 1",
      brainwave: "Brainwave 1",
      files: ["File 1", "File 2"],
      record: false,
      images: [
        sparkImg1,
        sparkImg1,
        sparkImg1,
        sparkImg1,
        sparkImg1,
        sparkImg1,
        sparkImg1,
      ],
    },
    {
      avatar: avatarImg2,
      username: "webGhoul",
      drop: "Drops 1",
      files: ["File 1"],
      record: true,
    },
    {
      avatar: avatarImg5,
      username: "Amr006",
      drop: "Drops 1",
      brainwave: "Brainwave 1",
      files: ["File 1", "File 2"],
      record: false,
      images: [sparkImg1, sparkImg2, sparkImg1, sparkImg1, sparkImg1],
    },
    {
      avatar: avatarImg3,
      username: "webGhoul",
      drop: "Drops 1",
      brainwave: "Brainwave 1",
      files: ["File 1", "File 2"],
      record: true,
      images: [sparkImg1, sparkImg2],
    },
    {
      avatar: avatarImg4,
      username: "webGhoul",
      drop: "Drops 1",
      brainwave: "Brainwave 1",
      files: ["File 1"],
      record: true,
      images: [sparkImg1, sparkImg2],
    },
    {
      avatar: avatarImg5,
      username: "webGhoul",
      drop: "Drops 1",
      brainwave: "Brainwave 1",
      files: ["File 1", "File 2"],
      record: true,
      images: [sparkImg2],
    },
  ];
  return (
    <Container className={`grid jcs aic g30`}>
      {data.map((spark, i) => (
        <Spark key={i} data={spark} />
      ))}
    </Container>
  );
};

export default SparksSection;
