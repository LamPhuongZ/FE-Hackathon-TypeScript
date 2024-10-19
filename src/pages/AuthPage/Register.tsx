import React, { useState } from "react";
import { Button, Form, Input, notification, Radio, Typography } from "antd";
import "./AuthPage.css";
import { registerAPI } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/configStore";
type LoginProps = {
  handleTabChange: (key: string) => void;
  activeKey: string;
};

export type UserRegisterType = {
  fullname: string;
  email: string;
  password: string;
  role: string;
};

const Register: React.FC<LoginProps> = ({handleTabChange, activeKey}) => {
  const [form] = Form.useForm();
  // const [loading, setLoading] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const {  Link, Title, Text  } = Typography;
  const dispatch: DispatchType = useDispatch();

  const onFinish = async (values: UserRegisterType) => {
    const actionAsync = registerAPI(values);
    dispatch(actionAsync);
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
    <div  className="flex flex-col items-center gap-3">
            <div>
              <Title level={1} className="text-[20px] !mb-0">
              
              <Title>Tạo tài khoản</Title>
           
              </Title>
            </div>
            <div className="flex gap-2">
              <Text type="secondary" className="text-[14px]">
              
                  "Đã có tài khoản?"
                  
              </Text>
              <Link
                style={{ fontSize: "16px" }}
                onClick={() =>
                  activeKey !== "1"
                    ? handleTabChange("1")
                    : handleTabChange("2")
                }
              >
                Đăng nhập
              </Link>
            </div>
          </div>
      <Form
        form={form}
        name="signup"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        
          <Form.Item
            name="fullname"
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
