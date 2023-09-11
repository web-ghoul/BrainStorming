import React, { useContext, useEffect } from "react";
import {
  AppBar,
  Container,
  useMediaQuery,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import { AccountCircle, Menu } from "@mui/icons-material";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import Link from "next/link";
import { DrawerContext } from "@/context/DrawerContext";
import ModeToggle from "../ModeToggle/ModeToggle";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton/SecondaryButton";
import { SpecialIconButton } from "@/MUIComponents/SpecialIconButton/SpecialIconButton";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/store/authSlice";
import { useRouter } from "next/navigation";

const Header = () => {
  const smallSize = useMediaQuery("(max-width:768px)");
  const drawerContext = useContext(DrawerContext);
  const { signed, user_id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleLogOut = () => {
    router.push("/");
    dispatch(logOut());
  };
  return (
    <AppBar
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
      className={`${styles.header}`}
    >
      <Container
        sx={{ height: { lg: "70px", md: "60px", sm: "50px", xs: "40px" } }}
        className={`flex jcsb aic g30 ${styles.header_contain} header_wrapped`}
      >
        <Logo title={true} color={"#fff"} />
        {smallSize ? (
          <SpecialIconButton
            onClick={drawerContext.toggleDrawer}
            sx={{ color: (theme) => theme.palette.primary.main }}
          >
            <Menu />
          </SpecialIconButton>
        ) : (
          <Box className={`flex jcfe aic g30`}>
            <List
              sx={{ padding: 0 }}
              className={`flex jcfe aic g30 ${styles.list}`}
            >
              <ListItem sx={{ padding: 0 }}>
                <Link href={`${process.env.NEXT_PUBLIC_HOME_PAGE}`}>
                  <ListItemButton>
                    <ListItemText primary={"Home"} />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem sx={{ padding: 0 }}>
                <Link href={`${process.env.NEXT_PUBLIC_TEAMS_PAGE}`}>
                  <ListItemButton>
                    <ListItemText primary={"Teams"} />
                  </ListItemButton>
                </Link>
              </ListItem>

              <ListItem sx={{ padding: 0 }}>
                <Link href={`${process.env.NEXT_PUBLIC_ABOUT_PAGE}`}>
                  <ListItemButton>
                    <ListItemText primary={"About"} />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
            {signed ? (
              <>
                <Link
                  href={`${process.env.NEXT_PUBLIC_PROFILE_PAGE}/${user_id}`}
                >
                  <SpecialIconButton
                    data-testid={"user_button"}
                    sx={{ color: (theme) => theme.palette.primary.main }}
                  >
                    <AccountCircle />
                  </SpecialIconButton>
                </Link>
                <SecondaryButton
                  onClick={handleLogOut}
                  data-testid={"auth_button"}
                >
                  Log Out
                </SecondaryButton>
              </>
            ) : (
              <>
                <SecondaryButton data-testid={"auth_button"}>
                  <Link href={`${process.env.NEXT_PUBLIC_LOGIN_PAGE}`}>
                    Login
                  </Link>
                </SecondaryButton>

                <SecondaryButton data-testid={"auth_button"}>
                  <Link href={`${process.env.NEXT_PUBLIC_REGISTER_PAGE}`}>
                    Register
                  </Link>
                </SecondaryButton>
              </>
            )}
          </Box>
        )}
      </Container>
    </AppBar>
  );
};

export default Header;
