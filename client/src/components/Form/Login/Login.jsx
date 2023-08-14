import { MyButton } from '@/MUIComponents/MyButton/MyButton'
import { Box, Divider, TextField } from '@mui/material'
import React from 'react'
import "../Form.css"
import loginImg from "../../../../public/images/login.jpeg"
import facebookImg from "../../../../public/images/facebook.png"
import youtubeImg from "../../../../public/images/youtube.png"
import twitterImg from "../../../../public/images/twitter.png"
import googleImg from "../../../../public/images/google.png"
import Logo from '@/components/Logo/Logo'
import Head from '@/components/Head/Head'
import { useTheme } from 'styled-components'
import { MyEmptyButton } from '@/MUIComponents/MyEmptyButton/MyEmptyButton'
import AuthButton from '@/components/AuthButton/AuthButton'
import Link from 'next/link'

const Login = ({formik}) => {
    const theme = useTheme()
    return (
        <form onSubmit={formik.handleSubmit} className={`grid jcs aic g10 login_form`}>
            <Box className={`grid aic jcs g20 form_contain`}>
                <Logo title={true} color={"#333"}/>
                <Box className={`grid jcs aic g10`}>
                    <AuthButton img={googleImg} text={"Log in with Google"}/>
                    <AuthButton img={facebookImg} text={"Log in with Facebook"}/>
                    <AuthButton img={youtubeImg} text={"Log in with Youtube"}/>
                    <AuthButton img={twitterImg} text={"Log in with Twitter"}/>
                </Box>
                <Divider/>
                <Box className={`grid jcs aic g10`}>
                    <TextField
                        fullWidth
                        id="login_email"
                        name="login_email"
                        label="Email"
                        value={formik.values.login_email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.login_email && Boolean(formik.errors.login_email)}
                        helperText={formik.touched.login_email && formik.errors.login_email}
                    />
                    <TextField
                        fullWidth
                        id="login_password"
                        name="login_password"
                        label="Password"
                        type="password"
                        value={formik.values.login_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.login_password && Boolean(formik.errors.password)}
                        helperText={formik.touched.login_password && formik.errors.login_password}
                    />
                    <MyButton fullWidth>Login</MyButton>
                    <MyEmptyButton fullWidth>
                        <Link href="/register">Create an Account ?</Link>
                    </MyEmptyButton>
                </Box>
            </Box>
            <Box className={`flex jcc aic form_image`} sx={{backgroundImage:`url(${loginImg.src})`,position:"relative"}}>
                <Box className={"overlay"}></Box>
                <Head align={"center"} h={"h2"} title={"Welcome Back"} color={"#fff"}/>
            </Box>
        </form>
    )
}

export default Login
