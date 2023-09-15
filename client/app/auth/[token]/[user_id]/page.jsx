"use client"
import { handleAlertToastify } from "@/functions/reactToastify";
import AuthSection from "@/sections/AuthSection/AuthSection";
import { getAuthData } from "@/store/authSlice";
import Cookies from "js-cookie";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const AuthPage = () => {
  const { token, user_id } = useParams();
  const dispatch = useDispatch()
  const router = useRouter()
  useEffect(()=>{
    Cookies.set("token",token)
    Cookies.set("user_id",user_id)
    dispatch(getAuthData({token,user_id}))
    router.push("/")
  },[dispatch])
  return <AuthSection />;
};

export default AuthPage;
