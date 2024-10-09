
import { Button, Form, Modal,  notification, Typography  } from "antd";
import {  useState,  } from "react";
import './AuthPage.css'
import Login from './Login'
import Register from './Register'
import { OTP } from "./OTP";


function AuthPage() {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isShowOTP, setIsShowOTP] = useState(true);
  const { Text, Link, Title } = Typography;
  const onFinish = (values: string) => {
    console.log("Finish:", values);
    // openNotification('topRight')
    api.success({
      message: `Bạn đã đăng nhập thành công !!!`,
      placement:'topRight',
      showProgress: true,
      pauseOnHover:true,
      duration: 1.5
    });
  };
  const onRegister = (values:string)=>{
    console.log("Register:", values);
    api.success({
      message: `Bạn đã đăng ký thành công!!!`,
      placement:'topRight',
      showProgress: true,
      pauseOnHover:true,
      duration: 1.5
    });
  }

  return (
    <>
    {contextHolder}
      <Button type="primary" onClick={() => { setModalOpen(true); setIsLogin(true); }}>
        Đăng nhập
      </Button>
    
      <Modal
        title={
          <div className="text-4xl font-normal text-center font-bold flex flex-col gap-5">
            { isShowOTP ? (isLogin ? <Title>Chào mừng trở lại</Title> : <Title>Đăng ký ngay</Title>) : <Title>Hãy nhập mã OTP</Title>}
            <div className="flex justify-center mb-5 gap-4">
              <Text type="secondary">{isShowOTP ? (isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản rồi') : ''}</Text>
              <Link onClick={() => setIsLogin(!isLogin)}>
                {isShowOTP ?(isLogin? "Đăng ký ngay" : "Đăng nhập") : ''}
              </Link>

            </div>
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
          onFinish={ isLogin ? onFinish : onRegister}
        >
         { isShowOTP ? (isLogin ? 
          <div className="sign-in">
              <Login />
              {/* <div className="flex flex-col justify-center text-center">
                <Title level={3}>Xin chào người dùng !</Title>
                <Text type="secondary">Nếu bạn đã có tài khoản rồi</Text>
              </div> */}
            </div>
         : 
         <div className="signup">
            <Register setIsShowOTP={setIsShowOTP} />
            {/* <div className="flex flex-col justify-center text-center">
                <Title level={3}>Xin chào người dùng !</Title>
                <Text type="secondary">Nếu bạn đã có tài khoản rồi</Text>
              </div> */}
            </div>) : <OTP /> }
         
            
            
        
           

         
         
        </Form>
      </Modal>
    </>
  );
}
export default AuthPage;