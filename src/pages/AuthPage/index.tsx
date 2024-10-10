import { Button, Form, Modal, notification, Typography, Tabs } from "antd";
import { useState } from "react";
import "./AuthPage.css";
import Login from "./Login";
import Register from "./Register";
import { OTP } from "./OTP";
import logoGoogle from "../../assets/icons/Google.svg";
import type { TabsProps } from "antd";
function AuthPage() {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isShowOTP, setIsShowOTP] = useState(true);
  const { Text, Link, Title } = Typography;

  console.log(clientReady);
  

  const onFinish = (values: string) => {
    console.log("Finish:", values);
    // openNotification('topRight')
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

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Đăng nhập",
      children: <Login />,
    },
    {
      key: "2",
      label: "Đăng ký ",
      children: <Register setIsShowOTP={setIsShowOTP} />,
    },
  ];

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
            {isShowOTP ? (
              isLogin ? (
                <Title>Chào mừng trở lại</Title>
              ) : (
                <Title>Đăng ký ngay</Title>
              )
            ) : (
              <Title>Hãy nhập mã OTP</Title>
            )}
            <div className="flex justify-center gap-5">
              <Typography.Title level={5} type="secondary">
                {isShowOTP
                  ? isLogin
                    ? "Chưa có tài khoản?"
                    : "Đã có tài khoản rồi"
                  : ""}
              </Typography.Title>
              {/* <Link
                style={{ fontSize: "16px" }}
                onClick={() => setIsLogin(!isLogin)}
              >
                {isShowOTP ? (isLogin ? "Đăng ký ngay" : "Đăng nhập") : ""}
              </Link> */}
            </div>

            {isShowOTP ? (
              <div>
                <Button
                  style={{ width: "100%", marginBottom: "2vh" }}
                  size="large"
                >
                  <img src={logoGoogle} alt="google" />
                  {isLogin ? "Đăng nhập bằng Google" : "Đăng ký bằng Google"}
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
        <Form
          form={form}
          name="horizontal_login"
          onFinish={isLogin ? onFinish : onRegister}
        >
          {/* { isShowOTP ? (isLogin ? 
          <div className="sign-in">
              <Login />
              
            </div>
         : 
         <div className="signup">
            <Register setIsShowOTP={setIsShowOTP} />
            
            </div>) : <OTP /> } */}
          <Tabs
          
          centered
          animated={{inkBar:true,tabPane: true}}
            defaultActiveKey="1"
            items={items}
            onChange={(activeKey) => {
              if (activeKey === "1") {
                setIsLogin(true);
              } else if (activeKey === "2") {
                setIsLogin(false);
              }
            }}
          />
        </Form>
      </Modal>
    </>
  );
}
export default AuthPage;
