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
import { Box, Container, Typography } from "@mui/material";
import Spark from "@/components/Spark/Spark";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSparks } from "@/store/sparksSlice";
import { TeamModalContext } from "@/context/TeamModalContext";
import { useContext } from "react";
import { useParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const SparksSection = () => {
  const { id } = useParams();
  const { sparks } = useSelector((state) => state.sparks);
  const router = useRouter();

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

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(getSparks({ team_id: id, token: Cookies.get("token") }));
    } catch (err) {
      router.push("/");
      handleAlertToastify("Can't Access This Page", "error");
    }
  }, []);
  return (
    <Box className={`grid jcs aic g30`}>
      {sparks.length > 0 ? (
        sparks.map((spark, i) => <Spark key={i} data={spark} />)
      ) : (
        <Typography
          variant="h2"
          sx={{ color: (theme) => theme.palette.gray }}
          className={`tac`}
        >
          No Sparks Yet...
        </Typography>
      )}
    </Box>
  );
};

export default SparksSection;
