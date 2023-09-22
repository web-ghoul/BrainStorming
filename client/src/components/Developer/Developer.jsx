import { Box, IconButton, Tooltip } from "@mui/material";
import React from "react";

import styles from "./Developer.module.css";
import Head from "../Head/Head";
import {
  FacebookRounded,
  GitHub,
  LinkedIn,
  WhatsApp,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Developer = ({ dev }) => {
  const router = useRouter()
  return (
    <Box className={`flex jcsb aic g30 ${styles.dev}`}>
      <Box className={`flex jcfs aic g10 ${styles.dev_box}`}>
        <Box className={`flex jcc aic ${styles.dev_img}`}>
          <Box sx={{ backgroundImage: `url(${dev.img.src})` }} />
          <Box sx={{ backgroundImage: `url(${dev.img1.src})` }} />
        </Box>
        <Box className={`grid jcfs aic g5 ${styles.dev_heads_box}`}>
          <Head color={"#037ef3"} title={dev.name} h={"h5"} align={"left"} />
          <Head title={dev.role} h={"subtitle3"} align={"left"} />
        </Box>
      </Box>
      <Box className={`${styles.contact} grid jcfeaic g10`}>
        <Head title={"Contact Me"} h={"h6"} align={"center"} />
        <Box className={`flex jcfe aic g10`}>
          <Tooltip title={"Facebook"}>
            <Link href={`${dev.links.facebook}`} target="_blank">
              <IconButton>
                <FacebookRounded
                  sx={{ color: (theme) => theme.palette.facebook }}
                />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title={"Linkedin"}>
            <Link href={`${dev.links.linkedin}`} target="_blank">
              <IconButton onClick={() => router.push(dev.links.linkedin)}>
                <LinkedIn sx={{ color: (theme) => theme.palette.linkedin }} />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title={"Whatsapp"}>
            <Link href={`${dev.links.whatsapp}`} target="_blank">
              <IconButton onClick={() => router.push(dev.links.whatsapp)}>
                <WhatsApp sx={{ color: (theme) => theme.palette.whatsapp }} />
              </IconButton>
            </Link>
          </Tooltip>
          <Tooltip title={"Github"}>
            <Link href={`${dev.links.github}`} target="_blank">
              <IconButton onClick={() => router.push(dev.links.github)}>
                <GitHub sx={{ color: (theme) => theme.palette.github }} />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  );
};

export default Developer;
