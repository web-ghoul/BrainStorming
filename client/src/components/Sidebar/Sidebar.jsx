"use client";
import React, { useContext } from "react";
import {
  Divider,
  ListItem,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Drawer,
  Box,
  Typography,
  Modal,
} from "@mui/material";
import {
  Groups,
  Home,
  HowToRegRounded,
  Info,
  Login,
  Logout,
} from "@mui/icons-material";
import { DrawerContext } from "@/context/DrawerContext";
import { useDispatch, useSelector } from "react-redux";
import { SpecialIconButtonWithText } from "@/MUIComponents/SpecialIconButtonWithText/SpecialIconButtonWithText";
import Logo from "../Logo/Logo";
import { logOut } from "@/store/authSlice";
import styles from "./Sidebar.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { toggleDrawer, openDrawer } = useContext(DrawerContext);
  const { signed, user_id } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogOut = () => {
    router.push("/");
    dispatch(logOut());
  };

  //Animation
  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  };
  const item = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -500 },
  };
  //Animation

  return (
    <Modal
      open={openDrawer}
      onClose={toggleDrawer}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Drawer
        className={`${styles.drawer}`}
        variant="persistent"
        anchor="right"
        open={openDrawer}
      >
        <Box className={`flex jcs aic g10 ${styles.drawer_head}`}>
          {signed ? (
            <SpecialIconButtonWithText
              onClick={() => {
                router.push(
                  `${process.env.NEXT_PUBLIC_PROFILE_PAGE}/${user_id}`
                );
                toggleDrawer();
              }}
            >
              <Box
                sx={{ backgroundImage: `url(${userData && userData.Image})` }}
                className={`${styles.avatar}`}
              />
              <Typography variant="h6">{userData && userData.Name}</Typography>
            </SpecialIconButtonWithText>
          ) : (
            <Logo title={true} color={"#333"} />
          )}
        </Box>

        <Divider />

        <List
          component={motion.ul}
          initial="hidden"
          animate="visible"
          variants={list}
        >
          <ListItem variants={item} key={"Home"} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(process.env.NEXT_PUBLIC_HOME_PAGE);
                toggleDrawer();
              }}
            >
              <ListItemIcon>
                <Home sx={{ color: (theme) => theme.palette.primary.main }} />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </ListItem>

          <ListItem variants={item} key={"Teams"} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(process.env.NEXT_PUBLIC_TEAMS_PAGE);
                toggleDrawer();
              }}
            >
              <ListItemIcon>
                <Groups sx={{ color: (theme) => theme.palette.primary.main }} />
              </ListItemIcon>
              <ListItemText primary={"Teams"} />
            </ListItemButton>
          </ListItem>

          <ListItem variants={item} key={"About"} disablePadding>
            <ListItemButton
              onClick={() => {
                router.push(process.env.NEXT_PUBLIC_ABOUT_PAGE);
                toggleDrawer();
              }}
            >
              <ListItemIcon>
                <Info sx={{ color: (theme) => theme.palette.primary.main }} />
              </ListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </ListItem>

          {signed ? (
            <ListItem variants={item} key={"Log Out"} disablePadding>
              <ListItemButton
                onClick={() => {
                  handleLogOut();
                  toggleDrawer();
                }}
              >
                <ListItemIcon>
                  <Logout
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  />
                </ListItemIcon>
                <ListItemText primary={"Log Out"} />
              </ListItemButton>
            </ListItem>
          ) : (
            <>
              <ListItem variants={item} key={"Login"} disablePadding>
                <ListItemButton
                  onClick={() => {
                    router.push(process.env.NEXT_PUBLIC_LOGIN_PAGE);
                    toggleDrawer();
                  }}
                >
                  <ListItemIcon>
                    <Login
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={"Login"} />
                </ListItemButton>
              </ListItem>
              <ListItem variants={item} key={"Register"} disablePadding>
                <ListItemButton
                  onClick={() => {
                    router.push(process.env.NEXT_PUBLIC_REGISTER_PAGE);
                    toggleDrawer();
                  }}
                >
                  <ListItemIcon>
                    <HowToRegRounded
                      sx={{ color: (theme) => theme.palette.primary.main }}
                    />
                  </ListItemIcon>
                  <ListItemText primary={"Register"} />
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </Modal>
  );
};

export default Sidebar;
