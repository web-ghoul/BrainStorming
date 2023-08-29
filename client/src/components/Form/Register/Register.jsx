import { Box, Divider, TextField } from "@mui/material";
import React from "react";
import "../Form.css";
import registerImg from "../../../../public/images/register.png";
import Logo from "@/components/Logo/Logo";
import Head from "@/components/Head/Head";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton/SecondaryButton";
import Link from "next/link";
import { FacebookRounded, Google } from "@mui/icons-material";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import { SpecialIconButton } from "@/MUIComponents/SpecialIconButton/SpecialIconButton";

const Register = ({ formik }) => {
  return (
    <>
      <Box className={`grid aic jcs g20 form_contain`}>
        <Logo title={true} color={"#333"} />
        <Box className={`grid jcs ass aic g20`}>
          <TextField
            fullWidth
            id="username"
            name="username"
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <LoadingButton text={"Register"} />
          <SecondaryButton fullWidth>
            <Link href={process.env.NEXT_PUBLIC_LOGIN_PAGE}>
              Have already an Account ?
            </Link>
          </SecondaryButton>
        </Box>
        <Divider />
        <Box className={`flex jcc aic g10`}>
          <SpecialIconButton>
            <Google sx={{ color: (theme) => theme.palette.gmail }} />
          </SpecialIconButton>
          <SpecialIconButton>
            <FacebookRounded
              sx={{ color: (theme) => theme.palette.facebook }}
            />
          </SpecialIconButton>
        </Box>
      </Box>
      <Box
        className={`flex jcc aic form_image`}
        sx={{
          backgroundImage: `url(${registerImg.src})`,
          position: "relative",
        }}
      >
        <Box className={"overlay"}></Box>
        <Head align={"center"} h={"h2"} title={"Join Us"} color={"#fff"} />
      </Box>
    </>
  );
};

export default Register;
