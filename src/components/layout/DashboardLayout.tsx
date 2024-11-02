import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="grid grid-cols-[317px_minmax(0,1fr)] items-start mx-8 pt-[66px]">
      <Sidebar />
      <Outlet />
    </div>
  );
}
