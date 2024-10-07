import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../pages/HomePage/components/header";

export default function HomeTemplate() {
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
