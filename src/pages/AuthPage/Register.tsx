import React from 'react';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

type RegisterProps = {
  setIsShowOTP: (show: boolean) => void;
};

const Register: React.FC<RegisterProps> = ({setIsShowOTP}) => {
  return (
    <>
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input variant="filled" prefix={<UserOutlined />} placeholder="Username" className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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
                <Input
                variant="filled"
                  prefix={<LockOutlined />}
                  type="password"
                  placeholder="Password"
                  className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </Form.Item>

              <Form.Item

                name="confirmPassword"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Please confirm your password!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  }),
                ]}
              >
                <Input.Password variant="filled" placeholder="Confirm your Password" className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </Form.Item>

              <Form.Item 
                >
                <Button block type="primary" htmlType="submit" onClick={()=>{
                  setIsShowOTP(false)
                }}>
                  Register
                </Button>
              </Form.Item>
            </>
  )
}
export default Register;