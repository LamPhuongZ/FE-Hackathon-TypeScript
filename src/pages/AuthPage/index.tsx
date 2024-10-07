import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Flex, Checkbox } from "antd";
import { useEffect, useState } from "react";

export default function AuthPage() {
  const [form] = Form.useForm();

  const [modalOpen, setModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [clientReady, setClientReady] = useState(false);

  useEffect(() => {
    setClientReady(true);
  }, []);

  console.log(clientReady);
  

  const onFinish = (values: string) => {
    console.log("Finish:", values);
  };

  return (
    <>
      <Button type="primary" onClick={() => { setModalOpen(true); setIsLogin(true); }}>
        Đăng nhập
      </Button>

      <Modal
        title={
          <div className="text-4xl font-bold text-center">
            {isLogin ? "Login" : "Register"}
          </div>
        }
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={null}
        style={{
          maxWidth: 360,
        }}
      >
        <Form
          form={form}
          name="horizontal_login"
          onFinish={onFinish}
        >
          {isLogin ? (
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
                <Input prefix={<UserOutlined />} placeholder="Username" className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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
                or <a href="#" onClick={() => setIsLogin(false)}>Register now!</a>
              </Form.Item>
            </>
          ) : (
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
                <Input prefix={<UserOutlined />} placeholder="Username" className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
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
                <Input.Password placeholder="Confirm your Password" className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
              </Form.Item>

              <Form.Item 
                >
                <Button block type="primary" htmlType="submit">
                  Register
                </Button>
                or <a href="#" onClick={() => setIsLogin(true)}>Log in now!</a>
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
    </>
  );
}
