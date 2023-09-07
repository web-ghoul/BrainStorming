"use client";
import { SpecialBox } from "@/MUIComponents/SpecialBox/SpecialBox";
import ProfileSection from "@/sections/ProfileSection/ProfileSection";
import React from "react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { getUserData } from "@/store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const User = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData(id));
  }, [id]);
  return (
    <SpecialBox data-testid={"profile_box"}>
      <ProfileSection />
    </SpecialBox>
  );
};

export default User;
