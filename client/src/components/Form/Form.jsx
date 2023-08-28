"use client";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import Login from "./Login/Login";
import Register from "./Register/Register";
import AddNewTeam from "./AddNewTeam/AddNewTeam";
import JoinTeam from "./JoinTeam/JoinTeam";
import ResetPassword from "./ResetPassword/ResetPassword";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import { Container } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { LoadingButtonContext } from "@/context/LoadingButtonContext";
import { handleAlertToastify } from "../../app/reactToastify.js";
import { redirect, useParams } from "next/navigation";
import ChangeAvatar from "./ChangeAvatar/ChangeAvatar";
import ChangeCover from "./ChangeCover/ChangeCover";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import { useRouter } from "next/navigation";

const Form = ({ type }) => {
  const { setButtonLoading } = useContext(LoadingButtonContext);
  const { id, unique } = useParams();
  const router = useRouter();
  const [file, setFile] = useState([]);

  // const handleVerifyAccount = async () => {
  //   await axios
  //     .get(process.env.NEXT_PUBLIC_SERVER_URL + `/verify/${id}/${unique}`)
  //     .then((res) => {
  //       try {
  //         handleAlertToastify(res.data.message, "success");
  //       } catch (error) {
  //         handleAlertToastify("Email Verified Successfully", "success");
  //       }
  //       redirect(process.env.NEXT_PUBLIC_LOGIN_PAGE);
  //     })
  //     .catch((err) => {
  //       try {
  //         handleAlertToastify(err.response.data.message, "error");
  //       } catch (error) {
  //         handleAlertToastify("Error", "e");
  //       }
  //     });
  // };

  const handleResetPassword = async () => {
    await axios
      .get(
        process.env.NEXT_PUBLIC_SERVER_URL + `/reset_password/${id}/${unique}`
      )
      .then((res) => {
        Cookies.set("hashedUniqueString", res.data.hashedUniqueString);
      })
      .catch(() => {
        redirect(process.env.NEXT_PUBLIC_REGISTER_PAGE);
      });
  };

  const loginInitialValues = {
    email: "",
    password: "",
  };

  const loginValidationSchema = yup.object({
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const registerInitialValues = {
    username: "",
    email: "",
    password: "",
  };

  const registerValidationSchema = yup.object({
    username: yup
      .string("Enter your username")
      .required("Username is required"),
    email: yup
      .string("Enter your email")
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string("Enter your password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const forgotPasswordValidationSchema = yup.object({
    email: yup.string("Enter your Email").required("Email is required"),
  });

  const forgotPasswordInitialValues = {
    email: "",
  };

  const resetPasswordInitialValues = {
    password: "",
    confirm_password: "",
  };

  const resetPasswordValidationSchema = yup.object({
    password: yup
      .string("Enter new password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Email is required"),
    confirm_password: yup
      .string()
      .required()
      .min(8)
      .when("password", (password, field) =>
        password
          ? field
              .required("Password isn't Matched")
              .oneOf([yup.ref("password")])
          : field
      ),
  });

  const addNewTeamInitialValues = {
    name: "",
    password: "",
  };

  const addNewTeamValidationSchema = yup.object({
    name: yup.string("Enter your team name").required("Team Name is required"),
    password: yup
      .string("Enter your Team Password")
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
  });

  const joinTeamInitialValues = {
    password: "",
  };

  const joinTeamValidationSchema = yup.object({
    password: yup
      .string("Enter your Team Password")
      .required("Password is required"),
  });


  const handleChangeFile = (e) => {
    setFile(e.target.value);
  };

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values) => {
      setButtonLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, { ...values })
        .then((res) => {
          handleAlertToastify(res.data.message, "success");
          router.push(process.env.NEXT_PUBLIC_HOME_PAGE);
          Cookies.set("token", res.data.token);
        })
        .catch((err) => {
          handleAlertToastify(err.response.data.message, "error");
        });
      setButtonLoading(false);
    },
  });

  const registerFormik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: async (values) => {
      setButtonLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, { ...values })
        .then((res) => {
          handleAlertToastify("Account Created Successfully!", "success");
          handleAlertToastify(res.data.message, "info");
        })
        .catch((err) => {
          handleAlertToastify(err.response.data.message, "error");
        });
      setButtonLoading(false);
    },
  });

  const forgotPasswordFormik = useFormik({
    initialValues: forgotPasswordInitialValues,
    validationSchema: forgotPasswordValidationSchema,
    onSubmit: async (values) => {
      setButtonLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/ForgotPassword`, {
          ...values,
        })
        .then((res) => {
          handleAlertToastify(res.data.message, "success");
        })
        .catch((err) => {
          handleAlertToastify(err.response.data.message, "error");
        });
      setButtonLoading(false);
    },
  });

  const resetPasswordFormik = useFormik({
    initialValues: resetPasswordInitialValues,
    validationSchema: resetPasswordValidationSchema,
    onSubmit: async (values) => {
      setButtonLoading(true);
      values["hashedUniqueString"] = Cookies.get("hashedUniqueString");
      await axios
        .put(`${process.env.NEXT_PUBLIC_SERVER_URL}/ResetPassword`, {
          ...values,
        })
        .then((res) => {
          handleAlertToastify(res.data.message, "success");
          router(process.env.NEXT_PUBLIC_LOGIN_PAGE);
        })
        .catch((err) => {
          handleAlertToastify(err.response.data.message, "error");
        });
      setButtonLoading(false);
    },
  });

  const addNewTeamFormik = useFormik({
    initialValues: addNewTeamInitialValues,
    validationSchema: addNewTeamValidationSchema,
    onSubmit: async (values) => {
      setButtonLoading(true);
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/Teams`,
          { ...values },
          { withCredentials: true }
        )
        .then((res) => {
          handleAlertToastify(res.data.message, "success");
        })
        .catch((err) => {
          handleAlertToastify(err.response.data.message, "error");
        });
      setButtonLoading(false);
    },
  });

  const joinTeamFormik = useFormik({
    initialValues: joinTeamInitialValues,
    validationSchema: joinTeamValidationSchema,
    onSubmit: async (values) => {
      setButtonLoading(true);
      values["TeamId"] = 1;
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/JoinTeam`,
          { ...values },
          { withCredentials: true }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      setButtonLoading(false);
    },
  });

  const handleChangeAvatar = async (e) => {
    e.preventDefault()
    setButtonLoading(true);
    const formData = new FormData()
    formData.append("files",file)
    console.log(file,formData)
    return ;
    await axios
      .patch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/uploadProfileImage`,
        file,
        {headers:{
          Authorization: `Bearer ${Cookies.get("token")}`
        }}
      )
      .then((res) => {
        handleAlertToastify(res.data.message,"success")
      })
      .catch((err) => {
        handleAlertToastify(err.response.data.message,"error")
      });
    setButtonLoading(false);
  };

  useEffect(() => {
    if (type === "reset_password") {
      handleResetPassword();
    }
  }, [type]);

  return (
    <Container>
      <form
        onSubmit={
          type === "login"
            ? loginFormik.handleSubmit
            : type === "register"
            ? registerFormik.handleSubmit
            : type === "forgot_password"
            ? forgotPasswordFormik.handleSubmit
            : type === "reset_password"
            ? resetPasswordFormik.handleSubmit
            : type === "add_new_team"
            ? addNewTeamFormik.handleSubmit
            : type === "join_team"
            ? joinTeamFormik.handleSubmit
            : type === "change_avatar" && handleChangeAvatar
        }
        className={`grid jcs aifs ${
          (type === "add_new_team" || type === "join_team") && "team_form"
        } ${
          (type === "change_cover" || type === "change_avatar") &&
          "profile_form"
        }`}
      >
        {type === "login" ? (
          <Login formik={loginFormik} />
        ) : type === "register" ? (
          <Register formik={registerFormik} />
        ) : type === "add_new_team" ? (
          <AddNewTeam
            handleChangeFile={handleChangeFile}
            formik={addNewTeamFormik}
          />
        ) : type === "join_team" ? (
          <JoinTeam formik={joinTeamFormik} />
        ) : type === "reset_password" ? (
          <ResetPassword formik={resetPasswordFormik} />
        ) : type === "forgot_password" ? (
          <ForgotPassword formik={forgotPasswordFormik} />
        ) : type === "change_cover" ? (
          <ChangeCover formik={forgotPasswordFormik} />
        ) : (
          type === "change_avatar" && (
            <ChangeAvatar handleChangeFile={handleChangeFile} />
          )
        )}
      </form>
    </Container>
  );
};

export default Form;
