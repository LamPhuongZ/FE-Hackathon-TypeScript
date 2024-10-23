import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/sideBar";
import "./style.scss"
import Header from "../../components/header";
import Footer from "../../components/footer";

const DashboardLayout = () => {
  return (
    <div className="">
      <Header/>
      <div className="dashboard-main">
        <Sidebar></Sidebar>
        <div className="dashboard-children p-4">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default DashboardLayout;
