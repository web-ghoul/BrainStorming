import { Button, Typography } from "@mui/material";
import React from "react";
import styles from "./Spark.module.css";
import { useRouter } from "next/navigation";
import Head from "../Head/Head";

const TeamName = ({ data }) => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(`/teams/${data.Team._id}`)}
      className={`flex jcc aic ${styles.team_name}`}
    >
      <Head
        title={data.Team.Name}
        teamName={true}
        align="center"
        color="#333"
        h="h6"
      />
    </Button>
  );
};

export default TeamName;
