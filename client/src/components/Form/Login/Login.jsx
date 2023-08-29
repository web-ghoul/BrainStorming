import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import { Box, Divider, TextField, Typography } from "@mui/material";
import React from "react";
import "../Form.css";
import loginImg from "../../../../public/images/login.jpeg";
import Logo from "@/components/Logo/Logo";
import Head from "@/components/Head/Head";
import { SecondaryButton } from "@/MUIComponents/SecondaryButton/SecondaryButton";
import Link from "next/link";
import { FacebookRounded, Google } from "@mui/icons-material";
import LoadingButton from "@/components/LoadingButton/LoadingButton";
import { SpecialIconButton } from "@/MUIComponents/SpecialIconButton/SpecialIconButton";

const Login = ({ formik }) => {
  return (
    <>
      <Box className={`grid aic jcs g20 form_contain`}>
        <Logo title={true} color={"#333"} />
        <Box className={`grid jcs ass aic g20`}>
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
          <Link
            href={process.env.NEXT_PUBLIC_FORGOTPASSWORD_PAGE}
            className={`forgot_password`}
          >
            <Typography variant="h6">Forgot Password ?</Typography>
          </Link>
          <LoadingButton text={"Login"} />
          <SecondaryButton fullWidth>
            <Link href={process.env.NEXT_PUBLIC_REGISTER_PAGE}>
              Create an Account ?
            </Link>
          </SecondaryButton>
        </Box>
        <Divider />
        <Box className={`flex jcc aic g10`}>
          <SpecialIconButton sx={{ color: (theme) => theme.palette.gmail }}>
            <Google />
          </SpecialIconButton>
          <SpecialIconButton sx={{ color: (theme) => theme.palette.facebook }}>
            <FacebookRounded />
          </SpecialIconButton>
        </Box>
      </Box>
      <Box
        className={`flex jcc aic form_image`}
        sx={{ backgroundImage: `url(${loginImg.src})`, position: "relative" }}
      >
        <Box className={"overlay"}></Box>
        <Head align={"center"} h={"h2"} title={"Welcome Back"} color={"#fff"} />
      </Box>
    </>
  );
};

export default Login;
