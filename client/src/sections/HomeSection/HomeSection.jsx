"use client";
import Dashboard from "@/components/Dashboard/Dashboard";
import Home from "@/components/Home/Home";
import React from "react";
import { useSelector } from "react-redux";

const HomeSection = () => {
  const { signed } = useSelector((state) => state.auth);
  const { userSparks } = useSelector((state) => state.user_sparks);
  return !signed && userSparks && userSparks.length > 0 ? (
    <Dashboard />
  ) : (
    <Home />
  );
};

export default HomeSection;
