import "./AuthPage.css";
import { Tabs } from "antd";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import { ForgotPass } from "./ForgotPass";

function AuthPage() {
  // const { Link } = Typography;
  const [activeKey, setActiveKey] = useState<string>("1");
  const { TabPane } = Tabs;

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <>
      <section className="w-full h-full flex justify-center items-center mt-[5%]">
        <div style={{ padding: "30px" }} className="w-[500px] bg-white rounded shadow-[0_19px_38px_rgba(0,0,0,0.3),_0_15px_12px_rgba(0,0,0,0.22)]">
          <Tabs className="login-register-tabs"
          animated
            defaultActiveKey="1"
            onChange={handleTabChange}
            activeKey={activeKey}
          >
            <TabPane   key="1">
              <Login handleTabChange={handleTabChange} activeKey={activeKey}/>
            </TabPane>
            <TabPane   key="2">
              <Register handleTabChange={handleTabChange} activeKey={activeKey}/>
            </TabPane>
            <TabPane   key="3">
              <ForgotPass handleTabChange={handleTabChange}/>
            </TabPane>
          </Tabs>
        </div>
      </section>
      
    </>
  );
}
export default AuthPage;
