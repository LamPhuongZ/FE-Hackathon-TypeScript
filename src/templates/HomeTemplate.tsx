import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Banner from "../pages/HomePage/components/banner";
import Login from "../pages/AuthPage/Login";



export default function HomeTemplate() {
  return (
    <div className="container__wrapper">
      <Header />
      <Banner />
      <div className="content__layout" style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
