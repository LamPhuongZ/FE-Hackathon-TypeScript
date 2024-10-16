import { Button, Form, Modal, notification, Typography, Tabs } from "antd";
import { useEffect, useState } from "react";
import "./AuthPage.css";
import Login from "./Login";
import Register from "./Register";
import { OTP } from "./OTP";
import logoGoogle from "../../assets/icons/Google.svg";

function AuthPage() {
  const [api, contextHolder] = notification.useNotification();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isShowOTP, setIsShowOTP] = useState(true);
  const { Text, Link, Title } = Typography;
  const [activeKey, setActiveKey] = useState<string>("1");
  // console.log(clientReady);

  const { TabPane } = Tabs;

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <>
      {contextHolder}

      <Button
        type="primary"
        onClick={() => {
          setModalOpen(true);
          setIsLogin(true);
        }}
      >
        Đăng nhập
      </Button>

      <Modal
        title={
          <div className="text-4xl font-normal text-center font-bold flex flex-col ">
            {activeKey === "1" ? (
              <Title>Chào mừng trở lại</Title>
            ) : (
              <Title>Đăng ký ngay</Title>
            )}
            <div className="flex justify-center gap-5">
              <Typography.Title level={5} type="secondary">
                {activeKey === "1"
                  ? "Chưa có tài khoản?"
                  : "Đã có tài khoản rồi"}
              </Typography.Title>
              <Link
                style={{ fontSize: "16px" }}
                onClick={() =>
                  activeKey !== "1"
                    ? handleTabChange("1")
                    : handleTabChange("2")
                }
              >
                {activeKey === "1" ? "Đăng ký ngay" : "Đăng nhập"}
              </Link>
            </div>

            {isShowOTP ? (
              <div>
                <Button
                  style={{ width: "100%", marginBottom: "2vh" }}
                  size="large"
                >
                  <img src={logoGoogle} alt="google" />
                  {activeKey === "1"
                    ? "Đăng nhập bằng Google"
                    : "Đăng ký bằng Google"}
                </Button>
              </div>
            ) : (
              ""
            )}
          </div>
        }
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={null}
        width={556}
      >
        <Tabs
          type={"line"}
          activeKey={activeKey}
          onChange={handleTabChange}
          centered
          animated
        >
          <TabPane key="1">
            <Login />
          </TabPane>
          <TabPane key="2">
            <Register setIsShowOTP={setIsShowOTP} />
          </TabPane>
        </Tabs>
        {/* </Form> */}
      </Modal>
    </>
  );
}
export default AuthPage;
