"use client"
import React from 'react'
import * as yup from "yup"
import { useFormik } from 'formik'
import Login from './Login/Login'
import Register from './Register/Register'

const Form = ({type}) => {

  const loginInitialValues = yup.object({
    login_email: "",
    login_password: ""
  });

  const loginValidationSchema = yup.object({
    login_email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    login_password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const registerInitialValue = yup.object({
    reg_username: "",
    reg_email: "",
    reg_password: "",
  });

  const registerValidationSchema = yup.object({
    reg_username: yup
      .string('Enter your username')
      .required('Username is required'),
    reg_email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    reg_password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: type === "login" ? loginInitialValues : registerInitialValue,
    validationSchema: type === "login" ? loginValidationSchema : registerValidationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      {type === "login" ?
       (<Login formik={formik}/>) : 
       (<Register formik={formik}/>)
      } 
    </>
  ) 
}

export default Form
