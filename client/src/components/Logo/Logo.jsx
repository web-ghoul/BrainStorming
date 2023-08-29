import React from "react";
import { Typography, IconButton } from "@mui/material";
import styles from "./Logo.module.css";
import logoImg from "../../../public/images/logo.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { EmojiObjects } from "@mui/icons-material";

const Logo = ({ title, color, align }) => {
  const router = useRouter();
  return (
    <IconButton
      onClick={() => router.push(process.env.NEXT_PUBLIC_HOME_PAGE)}
      className={`flex ${
        align && align === "center" ? "jcc" : "jcfs"
      } aic g10 ${styles.logo}`}
    >
      <EmojiObjects
        sx={{
          color: (theme) =>
            color === "#333" ? theme.palette.primary.main : theme.palette.white,
        }}
      />
      {title && (
        <Typography variant="h6" sx={{ color: color }} className={`fw700`}>
          BrainStorming
        </Typography>
      )}
    </IconButton>
  );
};

export default Logo;
