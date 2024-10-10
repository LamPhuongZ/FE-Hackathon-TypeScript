import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, message } from "antd";

type RegisterProps = {
  setIsShowOTP: (show: boolean) => void;
};

const Register: React.FC<RegisterProps> = ({ setIsShowOTP }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    setLoading(true);
    try {
      // Simulate API call to create a user
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success("Signup successful!");
      form.resetFields();
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed = () => {
    console.log("Failed:");
  };

  return (
    <>
      <Form
        form={form}
        name="signup"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          
          <div className="inputbox mb-5">
            <input required type="email" />
            <span>
              <Flex justify="space-between" align="center">
                <p>Nhập email</p>
              </Flex>
            </span>
            <i></i>
          </div>
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          
          <div className="inputbox ">
            <input required type="password" />
            <span>
              <Flex justify="space-between" align="center">
                <p>Mật khẩu</p>
              </Flex>
            </span>
            <i></i>
          </div>
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <div className="inputbox mt-5">
            <input required type="password" />
            <span>
              <Flex justify="space-between" align="center">
                <p>Mật khẩu</p>
              </Flex>
            </span>
            <i></i>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            block
            type="primary"
            htmlType="submit"
            onClick={() => {
              setIsShowOTP(true);
            }}
          >
            Register
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Register;

// import { useState } from 'react';
// import {
//   Button,
//   Checkbox,
//   Form,
//   Input,
//   message,
//   Typography,
// } from 'antd';
// import { GoogleOutlined } from '@ant-design/icons';

// const { Title } = Typography;

// const Register = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);

//   const onFinish = async (values) => {
//     setLoading(true);
//     try {
//       // Simulate API call to create a user
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       message.success('Signup successful!');
//       form.resetFields();
//     } catch (error) {
//       message.error('Failed to signup');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onFinishFailed = (errorInfo) => {
//     console.log('Failed:', errorInfo);
//   };

//   return (
//     <div className="container mx-auto p-8">
//       <Title level={2} className="text-center mb-8">
//         Sign Up
//       </Title>
//       <Form
//         form={form}
//         name="signup"
//         layout="vertical"
//         onFinish={onFinish}
//         onFinishFailed={onFinishFailed}
//         autoComplete="off"
//       >
//         <Form.Item
//           label="Full Name"
//           name="fullName"
//           rules={[{ required: true, message: 'Please input your name!' }]}
//         >
//           <Input placeholder="Jhon Doe" />
//         </Form.Item>
//         <Form.Item
//           label="Email"
//           name="email"
//           rules={[{ required: true, message: 'Please input your email!' }]}
//         >
//           <Input placeholder="example@gmail.com" />
//         </Form.Item>
//         <Form.Item
//           label="Password"
//           name="password"
//           rules={[{ required: true, message: 'Please input your password!' }]}
//         >
//           <Input.Password placeholder="Create a password" />
//         </Form.Item>
//         <Form.Item>
//           <Checkbox >Remember me</Checkbox>
//         </Form.Item>
//         <Form.Item>
//           <Button
//             type="primary"
//             htmlType="submit"
//             loading={loading}
//             className="w-full"
//           >
//             Sign Up
//           </Button>
//         </Form.Item>
//         <Form.Item>
//           <Button
//             type="link"
//             htmlType="button"
//             icon={<GoogleOutlined />}
//             className="w-full"
//           >
//             Sign Up with Google
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default Register;
