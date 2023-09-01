import React from "react";
import sparkImg1 from "../../../../public/images/back1.jpg";
import sparkImg2 from "../../../../public/images/back2.jpg";
import sparkImg3 from "../../../../public/images/back0.png";
import sparkImg4 from "../../../../public/images/backGif.gif";
import avatarImg1 from "../../../../public/images/avatar1.jpg";
import avatarImg2 from "../../../../public/images/avatar2.jpg";
import avatarImg3 from "../../../../public/images/avatar3.jpg";
import avatarImg4 from "../../../../public/images/avatar4.jpg";
import avatarImg5 from "../../../../public/images/avatar5.jpg";
import { Box, Container } from "@mui/material";
import Spark from "@/components/Spark/Spark";

const SparksSection = () => {
  const data = [
    // {
    //   avatar: avatarImg1,
    //   username: "webGhoul",
    //   drop: "Drops 1",
    //   brainwave: "Brainwave 1",
    //   files: ["File 1", "File 2"],
    //   record: false,
    //   images: [
    //     sparkImg1,
    //     sparkImg2,
    //     sparkImg3,
    //     sparkImg4,
    //     sparkImg1,
    //     sparkImg2,
    //     sparkImg3,
    //   ],
    // },
    // {
    //   avatar: avatarImg2,
    //   username: "webGhoul",
    //   drop: "Drops 1",
    //   files: ["File 1"],
    //   record: true,
    // },
    // {
    //   avatar: avatarImg5,
    //   username: "Amr006",
    //   drop: "Drops 1",
    //   brainwave: "Brainwave 1",
    //   files: ["File 1", "File 2"],
    //   record: false,
    //   images: [sparkImg1, sparkImg2, sparkImg3, sparkImg4],
    // },
    // {
    //   avatar: avatarImg3,
    //   username: "webGhoul",
    //   drop: "Drops 1",
    //   brainwave: "Brainwave 1",
    //   files: ["File 1", "File 2"],
    //   record: true,
    //   images: [sparkImg1, sparkImg2],
    // },
    // {
    //   avatar: avatarImg4,
    //   username: "webGhoul",
    //   drop: "Drops 1",
    //   brainwave: "Brainwave 1",
    //   files: ["File 1"],
    //   record: true,
    //   images: [sparkImg1, sparkImg2],
    // },
    // {
    //   avatar: avatarImg5,
    //   username: "webGhoul",
    //   drop: "Drops 1",
    //   brainwave: "Brainwave 1",
    //   files: ["File 1", "File 2"],
    //   record: true,
    //   images: [sparkImg2],
    // },
  ];
  return (
    <Box className={`grid jcs aic g30`}>
      {data.map((spark, i) => (
        <Spark key={i} data={spark} />
      ))}
    </Box>
  );
};

export default SparksSection;
