import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
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
const Main = ({ children }) => {
  const pathname = usePathname();
  const { openBackLoading } = useContext(BackLoadingContext);
  const {id, unique} = useParams()
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
      <FloatActionButtons bottom={"120px"} right={"40px"} left={"auto"} />
      <ToastContainer />
      <Footer />
    </PageBox>
  );
};

export default Main;
