import "./styles/_all.scss";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FloatButton } from 'antd';
import LandingTemplate from "./templates/LandingTemplate";
// import HomeTemplate from "./templates/HomeTemplate";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LandingTemplate />
    {/* <HomeTemplate /> */}
    <FloatButton.BackTop tooltip={<div>Back to top</div>}/>
  </StrictMode>
);
