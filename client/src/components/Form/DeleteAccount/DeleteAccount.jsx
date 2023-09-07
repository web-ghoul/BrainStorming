import { RedButton } from "@/MUIComponents/RedButton/RedButton";
import Head from "@/components/Head/Head";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import { MyThemeContext } from "@/context/MyThemeContext";
import { ProfileModalContext } from "@/context/ProfileModalContext";
import { Box } from "@mui/material";
import React from "react";
import { useContext } from "react";

const DeleteAccount = () => {
  const { handleToggleShowDeleteAccount } = useContext(ProfileModalContext);
  const { mode } = useContext(MyThemeContext);
  return (
    <>
      <Head
        align={"center"}
        h={"h5"}
        title={"Are you sure to delete your Account ?"}
        color={mode === "dark" ? "#fff" : "#000"}
      />
      <Box className={`flex jcfe aic g20`}>
        <LoadingButton text={"delete"} />
        <RedButton onClick={handleToggleShowDeleteAccount}>Cancel</RedButton>
      </Box>
    </>
  );
};

export default DeleteAccount;
