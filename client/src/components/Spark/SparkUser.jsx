import {
  AdminPanelSettings,
  Delete,
  MoreVertRounded,
  Person,
} from "@mui/icons-material";
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import styles from "./Spark.module.css";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { handleAlertToastify } from "@/app/reactToastify";

const SparkUser = ({ avatar, username, spark_date, leader, spark_id }) => {
  const [openList, setOpenList] = useState(false);
  const { token } = useSelector((state) => state.user);
  const handleDeleteSpark = async () => {
    await axios
      .delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/DeleteIdeas/${spark_id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        handleAlertToastify(res.data.message, "success");
      })
      .catch((err) => {
        handleAlertToastify(err.response.data.message, "error");
      });
  };
  document.addEventListener("click", (event) => {
    if (event.target.id === `list_button_${spark_id}` || event.target.id === `list_icon_${spark_id}`) {
      setOpenList(!openList);
    } else {
      setOpenList(false);
    }
  });
  return (
    <Box className={`flex jcsb aic g30 ${styles.user}`}>
      <Box className={`flex jcfs aic g10 `}>
        <Box className={`flex jcc aic ${styles.avatar}`}>
          <Image loading="lazy" la alt="avatar" src={avatar} />
        </Box>
        <Box className={`grid jcfs aic`}>
          <Typography variant="h6" sx={{ lineHeight: "20px" }}>
            {username}
          </Typography>
          <Box className={`flex jcfs aic g5 ${styles.spark_date}`}>
            <Typography variant="subtitle1">{spark_date}</Typography>
            {leader ? <AdminPanelSettings /> : <Person />}
          </Box>
        </Box>
      </Box>
      <IconButton id={`list_button_${spark_id}`} onClick={() => setOpenList(!openList)}>
        <MoreVertRounded
          id={`list_icon_${spark_id}`}
          sx={{ color: (theme) => theme.palette.white }}
        />
      </IconButton>
      {openList && (
        <List className={`${styles.spark_options}`}>
          <ListItem>
            <ListItemButton
              onClick={handleDeleteSpark}
              className={`flex jcfs aic g10`}
            >
              <ListItemIcon sx={{ minWidth: "auto" }}>
                <Delete />
              </ListItemIcon>
              <ListItemText id="delete" primary="Delete" />
            </ListItemButton>
          </ListItem>
        </List>
      )}
    </Box>
  );
};

export default SparkUser;
