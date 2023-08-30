import React from "react";
import { Box } from "@mui/material";
import Form from "@/components/Form/Form";

const CreateIdeaSection = () => {
  return (
    <Box className={`grid flex-wrap jcs aifs g30`}>
      <Form type="create_spark" />
    </Box>
  );
};

export default CreateIdeaSection;
