import { Button, Form, Modal, notification, Typography, Tabs } from "antd";
import { useEffect, useState } from "react";
import "./AuthPage.css";
import Login from "./Login";
import Register from "./Register";
import { OTP } from "./OTP";
import logoGoogle from "../../assets/icons/Google.svg";
import type { TabsProps } from "antd";
import axios, { AxiosResponse } from 'axios';
import loginApi from "../../services";

function AuthPage() {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isShowOTP, setIsShowOTP] = useState(true);
  const { Text, Link, Title } = Typography;
  const [activeKey, setActiveKey] = useState<string>('1');
  // console.log(clientReady);
  
  const {TabPane} = Tabs
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

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  useEffect(() => {
    // loginApi()
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('https://api.easyjob.io.vn/api/v1/auth/sign-in',
    //       {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0cmFuZ3RydW9uZ2dpYW5nMjAxNUBnbWFpbC5jb20iLCJpYXQiOjE3Mjg4Nzk2MDgsImV4cCI6MTcyODg4MDUwOH0.lio7JnHH_m_QrA4GcOrdzJuFIBZUHzeAdXEYU8l-NNw`
    //         },
    //         body: JSON.stringify({
    //           "username": 'trangtruonggiang2015@gmail.com',
    //           "password": '0909949741@bcD',
    //         })
    //       })
    //     if (!response.ok) {
    //       throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     console.log(data);
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    // }
  
    // fetchData();
//     interface JobData {
//       // Add expected properties of the job data response here
//       id: number;
//       title: string;
//       description: string;
//       // Add other fields as needed
//     }
//     const apiURL = 'https://api.easyjob.io.vn/api/v1/auth/sign-in';

// axios.get<JobData[]>(apiURL)
//   .then((response: AxiosResponse<JobData[]>) => {
//     console.log('Dữ liệu API:', response.data);
//   })
//   .catch(error => {
//     console.error('Lỗi khi gọi API:', error);
//   });

  }, [])
  
 
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
              {
              activeKey === '1' ? 
                <Title>Chào mừng trở lại</Title>
              : <Title>Đăng ký ngay</Title>
             
            }
            <div className="flex justify-center gap-5">
              <Typography.Title level={5} type="secondary">
                {
                  activeKey === '1'
                    ? "Chưa có tài khoản?"
                    : "Đã có tài khoản rồi"
                }
              </Typography.Title>
              <Link
                style={{ fontSize: "16px" }}
                onClick={() => 
                  activeKey !== '1' ? handleTabChange('1') : handleTabChange('2')
                }
              >
               {(activeKey === '1' ? "Đăng ký ngay" : "Đăng nhập")}
              </Link>
            </div>

            {isShowOTP ? (
              <div>
                <Button
                  style={{ width: "100%", marginBottom: "2vh" }}
                  size="large"
                >
                  <img src={logoGoogle} alt="google" />
                  {activeKey === '1' ? "Đăng nhập bằng Google" : "Đăng ký bằng Google"}
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
        {/* <Form
          form={form}
          name="horizontal_login"
          onFinish={isLogin ? onFinish : onRegister}
        > */}
          {/* { isShowOTP ? (isLogin ? 
          <div className="sign-in">
              <Login />
              
            </div>
         : 
         <div className="signup">
            <Register setIsShowOTP={setIsShowOTP} />
            
            </div>) : <OTP /> } */}
          <Tabs type={"line"} activeKey={activeKey} onChange={handleTabChange} centered animated >
        <TabPane  key="1">
          <Login  />
        </TabPane>
        <TabPane  key="2">
          <Register setIsShowOTP={setIsShowOTP} />
        </TabPane>
      </Tabs>
        {/* </Form> */}
      </Modal>
    </>
  );
}
export default AuthPage;
