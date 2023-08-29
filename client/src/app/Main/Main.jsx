"use client"
import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import TeamModal from "@/components/TeamModal/TeamModal";
import FloatActionButtons from "@/components/FloatActionButtons/FloatActionButtons";
import { useParams, usePathname } from "next/navigation";
import { PageBox } from "@/MUIComponents/PageBox/PageBox";
import BackLoading from "@/components/BackLoading/BackLoading";
import CarouselSlider from "@/components/CarouselSlider/CarouselSlider";
import { BackLoadingContext } from "@/context/BackLoadingContext";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProfileModal from "@/components/ProfileModal/ProfileModal";
import { useDispatch, useSelector } from "react-redux";
import { getAuthData } from "@/store/authSlice";
import Sidebar from "@/components/Sidebar/Sidebar";
import Cookies from "js-cookie";
const Main = ({ children }) => {
  const pathname = usePathname();
  const { openBackLoading } = useContext(BackLoadingContext);
  const {id, unique} = useParams()
  const dispatch = useDispatch()
  const {userData} = useSelector((state)=>state.user)
  try{
    const token = Cookies.get("token")
    const user_id = Cookies.get("user_id")
    dispatch(getAuthData({token,user_id}))
  }catch(err){
    console.log(err)
  }
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
        {openBackLoading && <BackLoading />}
        {children}
      </PageBox>
    );
  }
  return (
    <PageBox component={"main"}>
      <Header />
      {openBackLoading && <BackLoading />}
      <Sidebar />
      <CarouselSlider />
      {children}
      <TeamModal type="add_new_team" />
      <TeamModal type="join_team" />
      <ProfileModal type="change_cover" />
      <ProfileModal type="change_avatar" />
      <ProfileModal type="view_avatar" img={userData && userData.Image} />
      <FloatActionButtons bottom={"120px"} right={"40px"} left={"auto"} />
      <ToastContainer />
      <Footer />
    </PageBox>
  );
};

export default Main;
