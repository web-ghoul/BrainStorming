import UserAbout from "@/components/UserAbout/UserAbout";
import UserBack from "@/components/UserBack/UserBack";
import UserBox from "@/components/UserBox/UserBox";
import { Box, Container } from "@mui/material";
import React from "react";

const ProfileSection = () => {
  return (
    <Box>
      <UserBack />
      <Container>
        <UserBox />
        <UserAbout />
      </Container>
    </Box>
  );
};

export default ProfileSection;
