import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

type Props = {};

export default function DashboardLayout({}: Props) {
  return (
    <div className="grid grid-cols-[317px_minmax(0,1fr)] items-start mx-8">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
    </div>
  );
}
