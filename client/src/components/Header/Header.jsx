"use client";
import React, { useContext } from "react";
import {
  AppBar,
  Container,
  useMediaQuery,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { DrawerContext } from "@/context/DrawerContext";
import ModeToggle from "../ModeToggle/ModeToggle";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton/SecondaryButton";

const Header = () => {
  const smallSize = useMediaQuery("(max-width:768px)");
  const { toggleDrawer } = useContext(DrawerContext);
  return (
    <AppBar color="primary" className={`${styles.header}`}>
      <Container
        sx={{ height: { lg: "70px", md: "60px", sm: "50px", xs: "40px" } }}
        className={`flex jcsb aic g30 ${styles.header_contain}`}
      >
        <Logo title={true} color={"#fff"} />
        {smallSize ? (
          <List sx={{ padding: 0 }} className={`flex jcfe aic g10`}>
            <ListItem sx={{ padding: 0 }}>
              <ListItemButton sx={{ padding: 0 }} onClick={toggleDrawer}>
                <Menu />
              </ListItemButton>
            </ListItem>
          </List>
        ) : (
          <>
            <List
              sx={{ padding: 0 }}
              className={`flex jcfe aic g30 ${styles.list}`}
            >
              <ListItem sx={{ padding: 0 }}>
                <Link href={process.env.NEXT_PUBLIC_HOME_PAGE}>
                  <ListItemButton>
                    <ListItemText primary={"Home"} />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem sx={{ padding: 0 }}>
                <Link href={process.env.NEXT_PUBLIC_TEAMS_PAGE}>
                  <ListItemButton>
                    <ListItemText primary={"Teams"} />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem sx={{ padding: 0 }}>
                <Link href={process.env.NEXT_PUBLIC_ABOUT_PAGE}>
                  <ListItemButton>
                    <ListItemText primary={"About"} />
                  </ListItemButton>
                </Link>
              </ListItem>

              <SecondaryButton>
                <Link href={process.env.NEXT_PUBLIC_LOGIN_PAGE}>Login</Link>
              </SecondaryButton>

              <SecondaryButton>
                <Link href={process.env.NEXT_PUBLIC_REGISTER_PAGE}>
                  Register
                </Link>
              </SecondaryButton>

              <ModeToggle />
            </List>
          </>
        )}
      </Container>
    </AppBar>
  );
};

export default Header;
