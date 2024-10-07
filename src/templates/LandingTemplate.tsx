import { Outlet } from "react-router-dom";
import Header from "../pages/LandingPage/components/header";
import Footer from "../components/footer";

export default function LandingTemplate() {
  return (
    <div className="content-wrapper max-w-screen-2xl">
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
