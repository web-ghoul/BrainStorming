import { MainButton } from "@/MUIComponents/MainButton/MainButton";
import { MainIconButton } from "@/MUIComponents/MainIconButton/MainIconButton";
import { LoadingButtonContext } from "@/context/LoadingButtonContext";
import React from "react";
import { useContext } from "react";
import LoadingIcon from "../LoadingIcon/LoadingIcon";

const LoadingButton = ({ text }) => {
  const { buttonLoading } = useContext(LoadingButtonContext);
  return (
    <>
      {buttonLoading ? (
        <MainIconButton>
          <LoadingIcon />
        </MainIconButton>
      ) : (
        <MainButton type={"submit"}>{text}</MainButton>
      )}
    </>
  );
};

export default LoadingButton;
