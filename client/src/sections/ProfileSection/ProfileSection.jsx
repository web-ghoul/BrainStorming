import UserAbout from "@/components/UserAbout/UserAbout";
import UserBack from "@/components/UserBack/UserBack";
import UserBox from "@/components/UserBox/UserBox";
import { Box, Container } from "@mui/material";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ProfileSection = () => {
  const [isUser, setIsUser] = useState(false);
  const { id } = useParams();
  const router = useRouter();
  useEffect(() => {
    try {
      const user_id = Cookies.get("user_id");
      setIsUser(id === user_id);
    } catch (err) {
      router.push("/");
    }
  }, [isUser, id]);
  return (
    <Box>
      <UserBack isUser={isUser}/>
      <Container>
        <UserBox isUser={isUser}/>
        <UserAbout />
      </Container>
    </Box>
  );
};

export default ProfileSection;
