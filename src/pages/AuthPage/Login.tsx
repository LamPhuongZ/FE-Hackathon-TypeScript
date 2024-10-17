// import React, { useEffect, useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Form, Input, Flex, Checkbox, notification, Typography } from "antd";
import "./AuthPage.css";
import logoGoogle from "../../assets/icons/Google.svg";



const Login: React.FC = () => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  // const {  Link, Title, Text  } = Typography;
  const onFinish = async (values: { username: string; password: string }) => {
    try {
      const response = await fetch(
        "https://api.easyjob.io.vn/api/v1/auth/sign-in",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: values.username,
            password: values.password,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      api.success({
        message: `Bạn đã đăng nhập thành công !!! Chao ban ${values.username}`,
        placement: "topRight",
        showProgress: true,
        pauseOnHover: true,
        duration: 1.5,
      });
      form.resetFields();
    } catch (error) {
      console.error("Error:", error);
      api.error({
        message: "Đăng nhập thất bại. Vui lòng thử lại.",
        placement: "topRight",
        duration: 1.5,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Form form={form} name="horizontal_login" onFinish={onFinish}>
        <div className="flex flex-col ">
          <Form.Item
            name="username"
            rules={[
              {
                type: "email",
                required: true,
                message: "Hãy nhập email của bạn",
              },
            ]}
          >
            <label >Email</label>
            <Input placeholder="Nhập email" required type="text" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Nhập mật khẩu của bạn !!!",
              },{
                pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message: "Nhập sai định dạng mật khẩu!!!"
              }
            ]}
          >
            <label >Mật khẩu</label>
            <Input.Password
              placeholder="Nhập mật khẩu"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
           
          </Form.Item>
        </div>

        <Form.Item>
          <Flex justify="space-between" align="center">
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <a href="#">Forgot password</a>
          </Flex>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Login;
