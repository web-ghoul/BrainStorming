import React from "react";
import { Box, Typography } from "@mui/material";
import Spark from "@/components/Spark/Spark";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSpark, getSparks } from "@/store/sparksSlice";
import { useParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";

const SparksSection = () => {
  const { id } = useParams();
  const { sparks } = useSelector((state) => state.sparks);
  const router = useRouter();
  const {socket} = useSelector((state)=>state.auth)

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      dispatch(getSparks({ team_id: id, token: Cookies.get("token") }));
    } catch (err) {
      router.push("/");
      handleAlertToastify("Can't Access This Page", "error");
    }
    socket.on("receive_message",(data)=>{
      dispatch(addSpark(data))
    })
  }, [dispatch,router]);
  return (
    <Box className={`grid jcs aic g30`}>
      {sparks.length > 0 ? (
        sparks.map((spark, i) => <Spark key={i} data={spark} />)
      ) : (
        <Typography
          variant="h2"
          sx={{ color: (theme) => theme.palette.gray }}
          className={`tac`}
        >
          No Sparks Yet...
        </Typography>
      )}
    </Box>
  );
};

export default SparksSection;
