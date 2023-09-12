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
  IconButton,
  Box,
  Typography,
  Modal,
} from "@mui/material";
import {
  Groups,
  ChevronRight,
  Home,
  Info,
  AccountCircle,
  Login,
  Logout,
} from "@mui/icons-material";
import { DrawerContext } from "@/context/DrawerContext";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { SpecialIconButtonWithText } from "@/MUIComponents/SpecialIconButtonWithText/SpecialIconButtonWithText";
import Logo from "../Logo/Logo";
import { logOut } from "@/store/authSlice";
import styles from "./Sidebar.module.css";
import ModeToggle from "../ModeToggle/ModeToggle";

const Sidebar = () => {
  const { toggleDrawer, openDrawer } = useContext(DrawerContext);
  const { signed, user_id } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    router.push("/");
    dispatch(logOut());
  };
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

        <List>
          <ListItem key={"Home"} disablePadding>
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

          <ListItem key={"Teams"} disablePadding>
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

          <ListItem key={"About"} disablePadding>
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
            <ListItem key={"Log Out"} disablePadding>
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
              <ListItem key={"Login"} disablePadding>
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
              <ListItem key={"Register"} disablePadding>
                <ListItemButton
                  onClick={() => {
                    router.push(process.env.NEXT_PUBLIC_REGISTER_PAGE);
                    toggleDrawer();
                  }}
                >
                  <ListItemIcon>
                    <Info
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
