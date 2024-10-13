import { Button, Form, Input, Flex, Checkbox } from "antd";

const Login: React.FC = () => {
  return (
    <>
      <Form>
        <div className="flex flex-col gap-5">
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
            <div className="inputbox">
              <Input
                className="relative w-full p-5 pt-2.5 bg-transparent outline-none shadow-none border-none text-[#23242a] text-base tracking-wide transition duration-500 z-10 focus:ring-0 focus:border-none hover:bg-transparent"
                required
                type="text"
              />

              <span>Nhập email của bạn</span>
              <i></i>
            </div>
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
            <div className="inputbox">
              <Input
                className="relative w-full p-5 pt-2.5 bg-transparent outline-none shadow-none border-none text-[#23242a] text-base tracking-wide transition duration-500 z-10 focus:ring-0 focus:border-none hover:bg-transparent"
                required
                type="password"
              />
              <span>
                <Flex justify="space-between" align="center">
                  <p>Mật khẩu</p>
                </Flex>
              </span>
              <i></i>
            </div>
            {/* <Input
          variant="filled"
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          className="rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        /> */}
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
