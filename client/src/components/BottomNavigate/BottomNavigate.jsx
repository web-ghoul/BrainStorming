import { Comment, ThumbUpRounded } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import React from "react";

const BottomNavigate = () => {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      className={`flex jcsb aic`}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label="Like"
        value="like"
        icon={<ThumbUpRounded />}
      />
      <BottomNavigationAction
        label="Comment"
        value="comment"
        icon={<Comment />}
      />
    </BottomNavigation>
  );
};

export default BottomNavigate;
