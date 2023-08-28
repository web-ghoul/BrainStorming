import CreateIdeaBox from "@/components/CreateIdeaBox/CreateIdeaBox";
import MembersBox from "@/components/MembersBox/MembersBox";
import React from "react";
import { Box, Container } from "@mui/material";

const CreateIdeaSection = () => {
  return (
    <Box className={`grid flex-wrap jcs aifs g30`}>
      <CreateIdeaBox />
    </Box>
  );
};

export default CreateIdeaSection;
