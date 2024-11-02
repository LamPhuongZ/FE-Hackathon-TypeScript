import "./AuthPage.css";
import React from "react";
import { Button, Form, Input, notification, Radio, Typography } from "antd";
import { registerAPI } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/configStore";
import logoGoogle from "../../assets/icons/Google.svg";
import { OAuthConfig } from "../../configs/configuration";
import { HomeTwoTone } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

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

const Register: React.FC<LoginProps> = ({ handleTabChange, activeKey }) => {
  const [form] = Form.useForm();
  const [api, contextHolder] = notification.useNotification();
  const { Link, Title, Text } = Typography;
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

  const handleClickGoogle = (role: string) => {
    const callbackUrl = OAuthConfig.redirectUri;
    const authUrl = OAuthConfig.authUri;
    const googleClientId = OAuthConfig.clientId;

    //Redirect to Google form auth
    const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;

    localStorage.setItem("role", role);
    window.location.href = targetUrl;
  };
  
  const navigate = useNavigate()
  return (
    <>
      {contextHolder}
      <div className="flex flex-col items-center gap-3">
      <Button color="primary" variant="text" className="w-[50px] h-[50px]" onClick={()=>{
              navigate('/', { replace: true });
            }}><HomeTwoTone style={{fontSize:'30px'}} /></Button>
        <div>
          <Title level={1} className="text-[20px] !mb-0">
            Tạo tài khoản
          </Title>
        </div>
        <div className="flex gap-2 items-center mb-5">
          <Text type="secondary" className="text-[14px]">
            Đã có tài khoản?
          </Text>
          <Link
            style={{ fontSize: "16px" }}
            onClick={() =>
              activeKey !== "1" ? handleTabChange("1") : handleTabChange("2")
            }
          >
            Đăng nhập
          </Link>
        </div>
      </div>
      <div className=" w-[full] flex flex-col text-center items-center mb-4">
        <span className="text-center whitespace-normal break-normal">
          Đăng ký bằng Google
        </span>
      </div>
      <div className="flex justify-between w-full gap-2 mb-3">
        <Button
          className=" flex items-center"
          style={{ width: "50%" }}
          size="large"
          onClick={() => handleClickGoogle("ROLE_EMPLOYER")}
        >
          <img src={logoGoogle} alt="google" />
          <span> ỨNG VIÊN</span>
        </Button>
        <Button
          className=" flex items-center"
          style={{ width: "50%" }}
          size="large"
          onClick={() => handleClickGoogle("ROLE_APPLIER")}
        >
          <img src={logoGoogle} alt="google" />
          <span>NHÀ TUYỂN DỤNG</span>
        </Button>
      </div>

      <div className=" w-[full] flex  items-center mb-4">
        <span className="block border-t border-blue-300 w-full mr-2"></span>{" "}
        Hoặc{" "}
        <span className="block border-t border-blue-300 w-full ml-2"></span>
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
          <Input className="h-10" placeholder="Nhập tên" required type="text" />
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
          <Input className="h-10" placeholder="Nhập email" required type="text" />
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
                /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
              message:
                "Mật khẩu phải dài hơn 8 ký tự, có chứa ký tự đặc biệt, 1 chữ viết thường và một chữ viết hoa",
            },
          ]}
          hasFeedback
        >
          <Input.Password
          className="h-10"
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
                  new Error("Xác nhận mật khẩu không đúng!")
                );
              },
            }),
          ]}
        >
          <Input className="h-10" placeholder="Xác nhận mật khẩu" required type="password" />
        </Form.Item>

        <Form.Item label="Bạn tham gia với vai trò: " name="role">
          <Radio.Group buttonStyle="solid">
            <Radio.Button value="ROLE_EMPLOYER"> Ứng viên  </Radio.Button>
            <Radio.Button value="ROLE_APPLIER"> Nhà tuyển dụng</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button block type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Register;
