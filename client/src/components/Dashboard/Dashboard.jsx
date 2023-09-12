import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import Spark from "../Spark/Spark";
import LoadingDashboard from "./LoadingDashboard";

const Dashboard = () => {
  const { userSparks, isLoading } = useSelector((state) => state.user_sparks);
  return (
    <Box className={`grid jcs aic g30`}>
      {!isLoading ? (
        userSparks.map((spark, i) => {
          console.log(spark);
          return <Spark data={spark} />;
        })
      ) : (
        <LoadingDashboard/>
      )}
    </Box>
  );
};

export default Dashboard;
