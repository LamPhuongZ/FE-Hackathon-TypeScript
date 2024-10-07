import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Banner from "../pages/HomePage/components/banner";
import Header from "../pages/HomePage/components/header";

export default function HomeTemplate() {
  return (
    <div className="content-wrapper max-w-screen-2xl 2xl:max-w-full">
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <Banner />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
