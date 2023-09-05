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
import { SparkModalContext } from "@/context/SparkModalContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

const SparkUser = ({ user, spark_date, spark_id }) => {
  const [openList, setOpenList] = useState(false);
  const { handleToggleDeleteSparkModal,setSparkId } = useContext(SparkModalContext);
  const { team } = useSelector((state) => state.team);
  if (typeof document !== "undefined") {
    document.addEventListener("click", (event) => {
      if (
        event.target.id === `list_button_${spark_id}` ||
        event.target.id === `list_icon_${spark_id}`
      ) {
        setOpenList(!openList);
      } else {
        setOpenList(false);
      }
    });
  }
  return (
    <Box className={`flex jcsb aic g30 ${styles.user}`}>
      <Box className={`flex jcfs aic g10 `}>
        <Box className={`flex jcc aic ${styles.avatar}`}>
          <Image
            loading="lazy"
            width={100}
            height={100}
            la
            alt="avatar"
            src={user.Image}
          />
        </Box>
        <Box className={`grid jcfs aic`}>
          <Link href={`/profile/${user._id}`}>
            <Typography variant="h6" sx={{ lineHeight: "20px" }}>
              {user.Name}
            </Typography>
          </Link>
          <Box className={`flex jcfs aic g5 ${styles.spark_date}`}>
            <Typography variant="subtitle1">{spark_date}</Typography>
            {user.Name === team.TeamLeader.Name ? (
              <AdminPanelSettings />
            ) : (
              <Person />
            )}
          </Box>
        </Box>
      </Box>
      <IconButton
        id={`list_button_${spark_id}`}
        onClick={() => setOpenList(!openList)}
      >
        <MoreVertRounded
          id={`list_icon_${spark_id}`}
          sx={{ color: (theme) => theme.palette.white }}
        />
      </IconButton>
      {openList && (
        <List className={`${styles.spark_options}`}>
          <ListItem>
            <ListItemButton
              onClick={() => {
                setSparkId(spark_id)
                handleToggleDeleteSparkModal();
              }}
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
