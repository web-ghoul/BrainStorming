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

const Sidebar = () => {
  const { toggleDrawer, openDrawer } = useContext(DrawerContext);
  const { signed, user_id } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Drawer
      sx={{
        width: "250px",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "250px",
        },
      }}
      variant="persistent"
      anchor="right"
      open={openDrawer}
    >
      <Box className={`flex jcfs aic g10`} sx={{ padding: "5px" }}>
        <IconButton onClick={toggleDrawer}>
          <ChevronRight />
        </IconButton>
        {signed ? (
          <SpecialIconButtonWithText
            onClick={() =>
              router.push(`${process.env.NEXT_PUBLIC_PROFILE_PAGE}/${user_id}`)
            }
            sx={{ color: (theme) => theme.palette.primary.main }}
          >
            <AccountCircle />
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
            onClick={() => router.push(process.env.NEXT_PUBLIC_HOME_PAGE)}
          >
            <ListItemIcon>
              <Home sx={{ color: (theme) => theme.palette.primary.main }} />
            </ListItemIcon>
            <ListItemText primary={"Home"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"Teams"} disablePadding>
          <ListItemButton
            onClick={() => router.push(process.env.NEXT_PUBLIC_TEAMS_PAGE)}
          >
            <ListItemIcon>
              <Groups sx={{ color: (theme) => theme.palette.primary.main }} />
            </ListItemIcon>
            <ListItemText primary={"Teams"} />
          </ListItemButton>
        </ListItem>

        <ListItem key={"About"} disablePadding>
          <ListItemButton
            onClick={() => router.push(process.env.NEXT_PUBLIC_ABOUT_PAGE)}
          >
            <ListItemIcon>
              <Info sx={{ color: (theme) => theme.palette.primary.main }} />
            </ListItemIcon>
            <ListItemText primary={"About"} />
          </ListItemButton>
        </ListItem>

        {signed ? (
          <ListItem key={"Log Out"} disablePadding>
            <ListItemButton onClick={handleLogOut}>
              <ListItemIcon>
                <Logout sx={{ color: (theme) => theme.palette.primary.main }} />
              </ListItemIcon>
              <ListItemText primary={"Log Out"} />
            </ListItemButton>
          </ListItem>
        ) : (
          <>
            <ListItem key={"Login"} disablePadding>
              <ListItemButton
                onClick={() => router.push(process.env.NEXT_PUBLIC_LOGIN_PAGE)}
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
                onClick={() =>
                  router.push(process.env.NEXT_PUBLIC_REGISTER_PAGE)
                }
              >
                <ListItemIcon>
                  <Info sx={{ color: (theme) => theme.palette.primary.main }} />
                </ListItemIcon>
                <ListItemText primary={"Register"} />
              </ListItemButton>
            </ListItem>
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Sidebar;
