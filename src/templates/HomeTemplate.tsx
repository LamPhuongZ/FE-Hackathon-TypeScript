import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";

export default function HomeTemplate() {
  return (
    <div className="content-wrapper">
      <Header />
      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
