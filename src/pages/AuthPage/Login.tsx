import React from 'react';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Flex, Checkbox } from "antd";

const Login: React.FC = () => {
  return (
    <>
              <Form.Item
                name="username"
                rules={[
                  {
                    type:'email',
                    required: true,
                    message: "Hãy nhập email của bạn",
                  },
                ]}
              >
                <Input variant="filled" type='email' prefix={<UserOutlined />} placeholder="Email" className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Nhập mật khẩu của bạn !!!",
                  },
                ]}
              >
                <Input
                  variant="filled"
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                  className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </Form.Item>

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
            </>
  )
}
export default Login;