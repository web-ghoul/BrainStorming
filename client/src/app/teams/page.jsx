"use client";
import React, { useEffect, useState } from "react";
import TeamsSection from "@/sections/TeamsSection/TeamsSection";
import { MyBox } from "@/MUIComponents/MyBox/MyBox";

const page = () => {
  return (
    <MyBox>
      <TeamsSection />
    </MyBox>
  );
};

export default page;
