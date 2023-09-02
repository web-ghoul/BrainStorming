"use client";
import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamModal from "@/components/TeamModal/TeamModal";
import FloatActionButtons from "@/components/FloatActionButtons/FloatActionButtons";
import { useParams, usePathname, useRouter } from "next/navigation";
import { PageBox } from "@/MUIComponents/PageBox/PageBox";
import BackLoading from "@/components/BackLoading/BackLoading";
import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfileModal from "@/components/ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "@/components/Sidebar/Sidebar";
import { useEffect } from "react";
import { getUserData } from "@/store/userSlice";
import Cookies from "js-cookie";
import { getAuthData } from "@/store/authSlice";
import SparkModal from "@/components/SparkModal/SparkModal";

const Main = ({ children }) => {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();
  const { id, unique } = useParams();
  const { userData } = useSelector((state) => state.user);
  useEffect(() => {
    try {
      const token = Cookies.get("token");
      const user_id = Cookies.get("user_id");
      dispatch(getAuthData({ token, user_id }));
      if (user_id) {
        dispatch(getUserData(user_id));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);
  if (
    pathname === process.env.NEXT_PUBLIC_REGISTER_PAGE ||
    pathname === process.env.NEXT_PUBLIC_LOGIN_PAGE ||
    pathname === `/reset-password/${id}/${unique}` ||
    pathname === process.env.NEXT_PUBLIC_FORGOTPASSWORD_PAGE ||
    pathname === `/verify-account/${id}/${unique}`
  ) {
    return (
      <PageBox component={"main"}>
        <ToastContainer />
        <BackLoading />
        {children}
      </PageBox>
    );
  }

  return (
    <PageBox component={"main"}>
      <Header />
      <BackLoading />
      <Sidebar />
      <CarouselSlider />
      {children}
      <TeamModal type="add_new_team" />
      <TeamModal type="join_team" />
      <SparkModal />
      <ProfileModal type="change_cover" />
      <ProfileModal type="change_avatar" />
      <ProfileModal type="view_avatar" img={userData && userData.Image} />
      <FloatActionButtons />
      <ToastContainer />
      <Footer />
    </PageBox>
  );
};

export default Main;
