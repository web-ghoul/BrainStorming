import { MyButton } from '@/MUIComponents/MyButton/MyButton'
import { Box, Divider, TextField } from '@mui/material'
import React from 'react'
import "../Form.css"
import registerImg from "../../../../public/images/register.png"
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

const Register = ({formik}) => {
    const theme = useTheme()
    return (
        <form onSubmit={formik.handleSubmit} className={`grid jcs aic g10 login_form`}>
            <Box className={`grid aic jcs g20 form_contain`}>
                <Logo title={true} color={"#333"}/>
                <Box className={`grid jcs aic g10`}>
                    <AuthButton img={googleImg} text={"Sign up with Google"}/>
                    <AuthButton img={facebookImg} text={"Sign up with Facebook"}/>
                    <AuthButton img={youtubeImg} text={"Sign up with Youtube"}/>
                    <AuthButton img={twitterImg} text={"Sign up with Twitter"}/>
                </Box>
                <Divider/>
                <Box className={`grid jcs aic g10`}>
                    <TextField
                        fullWidth
                        id="reg_username"
                        name="reg_username"
                        label="Username"
                        value={formik.values.reg_username}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.reg_username && Boolean(formik.errors.reg_username)}
                        helperText={formik.touched.reg_username && formik.errors.reg_username}
                    />
                    <TextField
                        fullWidth
                        id="reg_email"
                        name="reg_email"
                        label="Email"
                        value={formik.values.reg_email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.reg_email && Boolean(formik.errors.reg_email)}
                        helperText={formik.touched.reg_email && formik.errors.reg_email}
                    />
                    <TextField
                        fullWidth
                        id="reg_password"
                        name="reg_password"
                        label="Password"
                        type="password"
                        value={formik.values.reg_password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.reg_password && Boolean(formik.errors.reg_password)}
                        helperText={formik.touched.reg_password && formik.errors.reg_password}
                    />
                    <MyButton fullWidth>Register</MyButton>
                    <MyEmptyButton fullWidth>
                        <Link href="/login">Have already an Account ?</Link>
                    </MyEmptyButton>
                </Box>
            </Box>
            <Box className={`flex jcc aic form_image`} sx={{backgroundImage:`url(${registerImg.src})`,position:"relative"}}>
                <Box className={"overlay"}></Box>
                <Head align={"center"} h={"h2"} title={"Join Us"} color={"#fff"}/>
            </Box>
        </form>
    )
}

export default Register
