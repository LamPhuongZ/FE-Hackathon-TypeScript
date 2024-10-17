import React, { useState } from "react";
import { Button, Form, Input, message, notification, Radio } from "antd";
import "./AuthPage.css";


const Register: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const onFinish = async (values: any) => {
    console.log(values);
    setLoading(true);
    try {
      // Call the API to create a user
      const response = await fetch(
        "https://api.easyjob.io.vn/api/v1/auth/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: values.username,
            email: values.email,
            password: values.password,
            role: values.role,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      api.success({
        message: `Bạn đã đăng ký thành công !!! Chao ban ${values.username}`,
        placement: "topRight",
        showProgress: true,
        pauseOnHover: true,
        duration: 1.5,
      });
      form.resetFields();
    } catch (error) {
      console.log(error)
    } finally { 
      setLoading(false);
    }
  };

  const onFinishFailed = () => {
    api.error({
      message: `Đăng ký thất bại. Vui lòng thử lại.`,
      placement: "topRight",
      duration: 1.5,
    });
  };
  return (
    <>
    {contextHolder}
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
                type: "string",
                required: true,
                message: "Hãy nhập tên của bạn!",
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
                message: "Vui lòng nhập email!",
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
                message: "Vui lòng nhập mật khẩu!",
              },
              {
                pattern:
                  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:
                  "Mật khẩu phải dài hơn 8 ký tự, có chứa ký tự đặc biệt, 1 chữ viết thường và một chữ viết hoa",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              placeholder="Nhập mật khẩu"
              required
              type="password"
            />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Hãy nhập lại mật khẩu!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "Xác nhận mật khẩu không đúng!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input
              placeholder="Xác nhận mật khẩu"
              required
              type="password"
            />
          </Form.Item>

          <Form.Item label="Bạn tham gia với vai trò: " name="role">
            <Radio.Group buttonStyle="solid">
              <Radio.Button value="ROLE_EMPLOYER"> Người tìm việc </Radio.Button>
              <Radio.Button value="ROLE_APPLIER"> Người thuê </Radio.Button>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
            >
              Register
            </Button>
          </Form.Item>
      </Form>
    </>
  );
};
export default Register;
