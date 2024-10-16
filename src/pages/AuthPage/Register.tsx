import React, { useState } from "react";
import { Button, Flex, Form, Input, message, Radio } from "antd";
import "./AuthPage.css";
type RegisterProps = {
  setIsShowOTP: (show: boolean) => void;
};

const Register: React.FC<RegisterProps> = ({ setIsShowOTP }) => {
  

  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: any) => {
    console.log(values)
    setLoading(true);
    try {
      // Call the API to create a user
      const response = await fetch('https://api.easyjob.io.vn/api/v1/auth/sign-up', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "fullname": values.username,
          "email": values.email,
          "password": values.password,
          "role": values.role
          
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      message.success("Signup successful!");
      form.resetFields();
    } catch (error) {
      console.error('Error:', error);
      message.error('Signup failed. Please try again.');
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
        <div className="flex flex-col gap-5">
        <Form.Item
          name="username"
          rules={[
            {
              type: "string",
              required: true,
              message: "Hãy nhập tên của bạn!",
            },{
              pattern: /^[a-zA-Z\s]+$/,
              message: "Chỉ nhập chữ",
            },
            
          ]}
        >
            <Input placeholder="Nhập tên" required type="text" />
          
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              type: "email",
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
            <Input placeholder="Nhập email" required type="text" />
          
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
            {
              pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
              message: "Mật khẩu phải dài hơn 8 ký tự, có chứa ký tự đặc biệt, 1 chữ viết thường và một chữ viết hoa",
            }
          ]}
          hasFeedback
        >
            <Input.Password  placeholder="Nhập mật khẩu"  required type="password" />
          {/* <div className="inputbox ">
            <span>
              
                <p>Mật khẩu</p>
              
            </span>
            <i></i>
          </div> */}
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
            <Input.Password placeholder="Xác nhận mật khẩu"  required type="password" />
          
        </Form.Item>

        <Form.Item label="Bạn tham gia với vai trò: " name="role">
          <Radio.Group>
            <Radio  value="ROLE_EMPLOYER"> Người tìm việc </Radio>
            <Radio  value="ROLE_APPLIER"> Người thuê </Radio>
          </Radio.Group>
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
</div>
      </Form>
    </>
  );
};
export default Register