import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import styles from "./TeamBox.module.css";
import roomImg from "../../../public/images/team4.jpg";
import Image from "next/image";
import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import { TeamModalContext } from "@/context/TeamModalContext";
import axios from "axios";
import { handleAlertToastify } from "@/app/reactToastify";
import { LoadingButtonContext } from "@/context/LoadingButtonContext";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const TeamBox = ({ data }) => {
  const { handleToggleJoinTeamModal, setTeamId } = useContext(TeamModalContext);
  const { setButtonLoading } = useContext(LoadingButtonContext);
  const { user_id, token } = useSelector((state) => state.auth);
  const router = useRouter();
  const handleEnterTeam = async () => {
    setButtonLoading(true);
    await axios
      .get(process.env.NEXT_PUBLIC_SERVER_URL + `/EnterTeam/${data._id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        router.push(`/teams/${data._id}`);
      })
      .catch((err) => {
        handleAlertToastify(err.response.data.message, "error");
      });
    setButtonLoading(false);
  };

  const handleJoinTeam = () => {
    handleToggleJoinTeamModal();
    setTeamId(data._id);
  };
  return (
    <Box
      className={`grid jcs aic ${styles.room}`}
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.black
            : theme.palette.white,
        borderColor: (theme) =>
          theme.palette.mode === "dark"
            ? theme.palette.primary.main
            : "transparent",
        boxShadow: (theme) =>
          theme.palette.mode === "dark"
            ? "none"
            : "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
      }}
    >
      <Box className={`flex jcc aic ${styles.room_image_box}`}>
        <Image width={200} height={200} alt="room" src={data.Image} />
      </Box>
      <Box className={`grid jcs aic g20 ${styles.room_data}`}>
        <Box className={`grid jcc aic`}>
          <Typography
            sx={{
              color: (theme) =>
                theme.palette.mode === "light"
                  ? theme.palette.black
                  : theme.palette.white,
            }}
            variant="h5"
            className={`fw700`}
          >
            {data.Name}
          </Typography>
        </Box>
        <Box className={`grid jcc aic ${styles.room_button}`}>
          {data.Members.includes(user_id) ? (
            <MainButton onClick={handleEnterTeam}>Enter</MainButton>
          ) : (
            <MainButton onClick={handleJoinTeam}>Join</MainButton>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default TeamBox;
