import UserBack from "@/components/User/UserBack/UserBack";
import UserBox from "@/components/User/UserBox/UserBox";
import { Box, Container, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import UserInfo from "@/components/User/UserInfo/UserInfo";
import { DeleteRounded } from "@mui/icons-material";
import { RedIconButton } from "@/MUIComponents/RedIconButton/RedIconButton";
import { useSelector } from "react-redux";
import { useContext } from "react";
import { ProfileModalContext } from "@/context/ProfileModalContext";

const ProfileSection = () => {
  const { signed } = useSelector((state) => state.auth);
  const { handleToggleShowDeleteAccount } = useContext(ProfileModalContext);
  const {isUser}= useSelector((state)=>state.user)
  return (
    <Box>
      <UserBack isUser={isUser} />
      <Container className={`grid jcs aic g30`}>
        <UserBox isUser={isUser} />
        <UserInfo title="Bio" />
        <UserInfo title="About" />
        {signed && isUser && (
          <RedIconButton onClick={handleToggleShowDeleteAccount}>
            <DeleteRounded />
            <Typography variant="h6">Delete Account</Typography>
          </RedIconButton>
        )}
      </Container>
    </Box>
  );
};

export default ProfileSection;
