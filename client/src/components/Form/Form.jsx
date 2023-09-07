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
import { useDispatch, useSelector } from "react-redux";
import { getAuthData } from "@/store/authSlice";
import { getUserData } from "@/store/userSlice";
import { getTeams } from "@/store/teamsSlice";
import { TeamModalContext } from "@/context/TeamModalContext";
import CreateSpark from "./CreateSpark/CreateSpark";
import { SparkModalContext } from "@/context/SparkModalContext";
import { ProfileModalContext } from "@/context/ProfileModalContext";
import EditProfile from "./EditProfile/EditProfile";
import ChangeTeamCover from "./ChangeTeamCover/ChangeTeamCover";
import { getTeam } from "@/store/teamSlice";
import DeleteSpark from "./DeleteSpark/DeleteSpark";
import { getSparks } from "@/store/sparksSlice";

const Form = ({ type }) => {
  const { setButtonLoading } = useContext(LoadingButtonContext);
  const {
    teamId,
    handleToggleJoinTeamModal,
    handleToggleAddNewTeamModal,
    handleToggleChangeTeamImageModal,
  } = useContext(TeamModalContext);
  const {
    handleToggleChangeProfileCoverModal,
    handleToggleChangeAvatarModal,
    handleToggleEditProfileModal,
  } = useContext(ProfileModalContext);
  const { userData } = useSelector((state) => state.user);
  const {
    imageFiles,
    sparkId,
    audioFiles,
    record,
    docFiles,
    handleResetData,
    handleToggleDeleteSparkModal
  } = useContext(SparkModalContext);
  const { id, unique } = useParams();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { token, user_id } = useSelector((state) => state.auth);
  const { team } = useSelector((state) => state.team);

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

  const createSparkInitialValues = {
    idea: "",
    description: "",
  };

  const createSparkValidationSchema = yup.object({
    idea: yup.string("Enter your Idea").required("Idea is required"),
    description: yup.string("Enter your Description"),
  });

  const editProfileInitialValues = {
    name: userData && userData.Name,
    bio: userData && userData.Bio,
    about: userData && userData.About,
  };

  const editProfileValidationSchema = yup.object({
    name: yup.string("Enter your name").required("Name is required"),
    bio: yup.string("Enter your Bio"),
    about: yup.string("Enter your About"),
  });

  const handleChangeFile = (f) => {
    setFile(f);
  };

  const loginFormik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      setButtonLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/login`, { ...values })
        .then((res) => {
          router.push(process.env.NEXT_PUBLIC_HOME_PAGE);
          Cookies.set("token", res.data.token);
          Cookies.set("user_id", res.data.userId);
          const authData = { token: res.data.token, user_id: res.data.userId };
          dispatch(getAuthData(authData));
          handleAlertToastify(res.data.message, "success");
          resetForm();
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
    onSubmit: async (values, { resetForm }) => {
      setButtonLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/register`, { ...values })
        .then((res) => {
          handleAlertToastify("Account Created Successfully!", "success");
          handleAlertToastify(res.data.message, "info");
          resetForm();
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
    onSubmit: async (values, { resetForm }) => {
      setButtonLoading(true);
      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/ForgotPassword`, {
          ...values,
        })
        .then((res) => {
          handleAlertToastify(res.data.message, "success");
          resetForm();
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
    onSubmit: async (values, { resetForm }) => {
      setButtonLoading(true);
      values["hashedUniqueString"] = Cookies.get("hashedUniqueString");
      await axios
        .put(`${process.env.NEXT_PUBLIC_SERVER_URL}/ResetPassword`, {
          ...values,
        })
        .then((res) => {
          handleAlertToastify(res.data.message, "success");
          Cookies.remove("hashedUniqueString");
          router(process.env.NEXT_PUBLIC_LOGIN_PAGE);
          resetForm();
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
    onSubmit: async (values, { resetForm }) => {
      setButtonLoading(true);
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/Teams`,
          { ...values },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          handleAlertToastify(res.data.message, "success");
          dispatch(getTeams());
          handleToggleAddNewTeamModal();
          resetForm();
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
    onSubmit: async (values, { resetForm }) => {
      setButtonLoading(true);
      values["teamId"] = teamId;
      await axios
        .patch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/joinTeam`,
          { ...values },
          { headers: { Authorization: `Bearer ${token}` } }
        )
        .then((res) => {
          handleAlertToastify(res.data.message, "success");
          dispatch(getTeams());
          handleToggleJoinTeamModal();
          resetForm();
        })
        .catch((err) => {
          handleAlertToastify(err.response.data.message, "error");
        });
      setButtonLoading(false);
    },
  });

  const createSparkFormik = useFormik({
    initialValues: createSparkInitialValues,
    validationSchema: createSparkValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      setButtonLoading(true);
      const data = new FormData();
      const allFiles = [...imageFiles, ...audioFiles, ...docFiles];
      if (record) {
        data.append("record", record);
      }
      if (allFiles.length > 0) {
        for (let i = 0; i < allFiles.length; i++) {
          data.append("files", allFiles[i]);
        }
      } else {
        data.append("files", []);
      }
      data.append("idea", values.idea);
      data.append("description", values.description);
      data.append("team", id);
      data.forEach((value, key) => {
        console.log(key, value);
      });

      await axios
        .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/Ideas`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          handleAlertToastify(res.data.message, "success");
          handleResetData();
          resetForm();
        })
        .catch((err) => {
          handleAlertToastify(err.response.data.message, "error");
        });
      setButtonLoading(false);
    },
  });

  const editProfileFormik = useFormik({
    initialValues: editProfileInitialValues,
    validationSchema: editProfileValidationSchema,
    onSubmit: async (values) => {
      setButtonLoading(true);
      await axios
        .patch(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/updateProfile`,
          { ...values },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          handleAlertToastify(res.data.message, "success");
          dispatch(getUserData(user_id));
          handleToggleEditProfileModal();
        })
        .catch((err) => {
          handleAlertToastify(err.response.data.message, "error");
        });
      setButtonLoading(false);
    },
  });

  const handleChangeAvatar = async (e) => {
    e.preventDefault();
    if (!file) {
      handleAlertToastify("Choose your Avatar", "info");
      return;
    }
    setButtonLoading(true);
    const formData = new FormData();
    formData.append("files", file);
    await axios
      .patch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/uploadProfileImage`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        handleAlertToastify(res.data.message, "success");
        dispatch(getUserData(user_id));
        handleToggleChangeAvatarModal();
        setFile(null);
      })
      .catch((err) => {
        handleAlertToastify(err.response.data.message, "error");
      });
    setButtonLoading(false);
  };

  const handleChangeCover = async (e) => {
    e.preventDefault();
    if (!file) {
      handleAlertToastify("Choose your Cover", "info");
      return;
    }
    setButtonLoading(true);
    const formData = new FormData();
    formData.append("files", file);
    await axios
      .patch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/uploadBackgroundPic`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        handleAlertToastify(res.data.message, "success");
        dispatch(getUserData(user_id));
        handleToggleChangeProfileCoverModal();
        setFile(null);
      })
      .catch((err) => {
        handleAlertToastify(err.response.data.message, "error");
      });
    setButtonLoading(false);
  };

  const handleChangeTeamImage = async (e) => {
    e.preventDefault();
    if (!file) {
      handleAlertToastify("Choose Team Cover", "info");
      return;
    }
    setButtonLoading(true);
    const formData = new FormData();
    formData.append("files", file);
    await axios
      .patch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/uploadTeamImage/${id}`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        handleAlertToastify(res.data.message, "success");
        dispatch(getTeam({ team_id: id, token }));
        handleToggleChangeTeamImageModal();
        setFile(null);
      })
      .catch((err) => {
        handleAlertToastify(err.response.data.message, "error");
      });
    setButtonLoading(false);
  };

  const handleDeleteSpark = async (e) => {
    e.preventDefault();
    setButtonLoading(true);
    await axios
      .delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/DeleteIdea/${sparkId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        handleAlertToastify(res.data.message, "success");
        dispatch(getSparks({ token, team_id: team._id }));
        handleToggleDeleteSparkModal()
      })
      .catch((err) => {
        try {
          handleAlertToastify(err.response.data.message, "error");
        } catch (err) {
          handleAlertToastify(err, "error");
        }
      });
    setButtonLoading(false);
  };

  useEffect(() => {
    if (type === "reset_password") {
      handleResetPassword();
    }
  }, [type]);

  return (
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
          : type === "create_spark"
          ? createSparkFormik.handleSubmit
          : type === "change_avatar"
          ? handleChangeAvatar
          : type === "change_team_image"
          ? handleChangeTeamImage
          : type === "delete_spark"
          ? handleDeleteSpark
          : type === "change_cover"
          ? handleChangeCover
          : type === "edit_profile" && editProfileFormik.handleSubmit
      }
      className={`grid jcs aifs ${
        (type === "add_new_team" ||
          type === "join_team" ||
          type === "edit_profile") &&
        "team_form"
      } ${type === "edit_profile" && "g30 edit_profile_box"} ${
        (type === "change_cover" ||
          type === "change_team_image" ||
          type === "change_avatar" ||
          type === "delete_spark") &&
        "profile_form g30"
      } ${type === "create_spark" && "g30 spark_form"}`}
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
        <ChangeCover handleChangeFile={handleChangeFile} />
      ) : type === "change_team_image" ? (
        <ChangeTeamCover handleChangeFile={handleChangeFile} />
      ) : type === "change_avatar" ? (
        <ChangeAvatar handleChangeFile={handleChangeFile} />
      ) : type === "delete_spark" ? (
        <DeleteSpark />
      ) : type === "create_spark" ? (
        <CreateSpark
          handleChangeFile={handleChangeFile}
          formik={createSparkFormik}
        />
      ) : (
        <EditProfile formik={editProfileFormik} />
      )}
    </form>
  );
};

export default Form;
