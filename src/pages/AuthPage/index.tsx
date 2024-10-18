import { Button, Modal, Typography, Tabs } from "antd";
import { useState } from "react";
import "./AuthPage.css";
import Login from "./Login";
import Register from "./Register";
import logo from "../../assets/images/logo-company.png";
import logoGoogle from "../../assets/icons/Google.svg";

function AuthPage() {
 
  const { Link, Title, Text } = Typography;
  const [activeKey, setActiveKey] = useState<string>("1");
  // console.log(clientReady);

  const { TabPane } = Tabs;

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <>
      <div className="pr-[112px] py-[24px]">
        <div className="flex items-center capitalize justify-start">
          <Link className="flex  items-center gap-2">
            <img src={logo} alt="" className="w-10 h-10" loading="lazy" />
            <h1 className="text-[28px] !m-0 w-60 h-full  font-bold">
              Việc làm dễ
            </h1>
          </Link>
        </div>
      </div>

      <section className="w-full h-full flex justify-center items-center mt-[2%]">
        <div style={{ padding: "30px" }} className="w-[500px] bg-white rounded shadow-[0_19px_38px_rgba(0,0,0,0.3),_0_15px_12px_rgba(0,0,0,0.22)]">
          

          <Tabs
          animated
            defaultActiveKey="1"
            onChange={handleTabChange}
            activeKey={activeKey}
          >
            <TabPane  key="1">
              <Login handleTabChange={handleTabChange} activeKey={activeKey}/>
            </TabPane>
            <TabPane  key="2">
              <Register handleTabChange={handleTabChange} activeKey={activeKey}/>
            </TabPane>
          </Tabs>
        </div>
      </section>
      
    </>
  );
}
export default AuthPage;
