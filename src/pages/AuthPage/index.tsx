import { useState } from "react";
import { Form, Modal, notification, Tabs, Typography } from "antd";
import Login from "./Login";
import Button from "../../components/button/Button";
import Google from "../../assets/icons/icon-google.svg";
import Register from "./Register";

export default function AuthPage() {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [isShowOTP, setIsShowOTP] = useState<boolean>(true);
  const [activeKey, setActiveKey] = useState<string>("1");
  const { Link, Title } = Typography;

  const { TabPane } = Tabs;
  const onFinish = (values: string) => {
    console.log("Finish:", values);
    api.success({
      message: `Bạn đã đăng nhập thành công !!!`,
      placement: "topRight",
      showProgress: true,
      pauseOnHover: true,
      duration: 1.5,
    });
  };

  const onRegister = (values: string) => {
    console.log("Register:", values);
    api.success({
      message: `Bạn đã đăng ký thành công!!!`,
      placement: "topRight",
      showProgress: true,
      pauseOnHover: true,
      duration: 1.5,
    });
  };

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div className="auth">
      {contextHolder}
      <Button
        title="Đăng Nhập"
        onClick={() => {
          setIsModalOpen(true);
          setIsLogin(true);
        }}
      />

      <Modal
        title={
          <div className="text-4xl text-center font-bold flex flex-col ">
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
                  title={
                    activeKey === "1"
                      ? "Đăng nhập bằng Google"
                      : "Đăng ký bằng Google"
                  }
                  color="custom"
                  icon={<img src={Google} alt="icon-google" />}
                  className=" w-full h-16 mb-8 flex items-center justify-center gap-[10px] bg-white border"
                  iconPosition="left"
                  onClick={() => {}}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        }
        centered
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        width={556}
      >
        <Form
          form={form}
          name="horizontal_login"
          onFinish={isLogin ? onFinish : onRegister}
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
        </Form>
      </Modal>
    </div>
  );
}
