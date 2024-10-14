import React from "react";
import { Form, Input, message } from "antd";
import Button from "../../../components/button/Button";

type RegisterProps = {
  setIsShowOTP: (show: boolean) => void;
};

const Register: React.FC<RegisterProps> = ({ setIsShowOTP }) => {
  const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);

  const onFinish = async () => {
    // setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      message.success("Đăng ký thành công!");
      form.resetFields();
    } finally {
    //   setLoading(false);
    }
  };

  const onFinishFailed = () => {
    console.log("Failed:");
  };

  return (
    <>
      <Form
        form={form}
        name="signUp"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="flex flex-col gap-5">
          <Form.Item
            name="username"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <div className="inputbox">
              <Input
                className="text-[14px] relative w-full p-5 pt-2.5 bg-transparent outline-none shadow-none border-none text-[#23242a] text-base tracking-wide transition duration-500 z-10 focus:bg-transparent focus:ring-0 focus:border-none hover:bg-transparent"
                required
                type="text"
              />
              <span>Email</span>
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
              <Input
                className="text-[14px] relative w-full p-5 pt-2.5 bg-transparent outline-none shadow-none border-none text-[#23242a] text-base tracking-wide transition duration-500 z-10 focus:bg-transparent focus:ring-0 focus:border-none hover:bg-transparent"
                required
                type="password"
              />
              <span>
                <p>Mật khẩu</p>
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
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <div className="inputbox">
              <input
                className=" relative w-full p-5 pt-2.5 bg-transparent outline-none shadow-none border-none text-[#23242a] text-base tracking-wide transition duration-500 z-10 focus:bg-transparent focus:ring-0 focus:border-none hover:bg-transparent"
                required
                type="password"
              />
              <span>
                <p>Xác nhận mật khẩu</p>
              </span>
              <i></i>
            </div>
          </Form.Item>

          <Form.Item>
            <Button title="Đăng Ký" type="submit" className="w-full" onClick={() => setIsShowOTP(true)} />
          </Form.Item>
        </div>
      </Form>
    </>
  );
};
export default Register;
