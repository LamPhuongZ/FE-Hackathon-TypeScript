import "./AuthPage.css";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  HomeTwoTone,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Flex,
  Checkbox,
  notification,
  Typography,
  Tabs,
} from "antd";
import logoGoogle from "../../assets/icons/Google.svg";
import { OAuthConfig } from "../../configs/configuration";
import { loginAPI, setIsLoginAction } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";
import { DispatchType } from "../../redux/configStore";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getCookie, setCookie } from "../../utils/utilMethod";
import { decodePassword, encodePassword } from "../../hooks/useTokenize";

type LoginProps = {
  handleTabChange: (key: string) => void;
  activeKey?: string;
};

export type UserLoginType = {
  username: string;
  password: string;
  remember?: boolean;
};

const Login: React.FC<LoginProps> = ({ handleTabChange, activeKey }) => {
  const [form] = Form.useForm();
  const dispatch: DispatchType = useDispatch();
  const { Link, Title, Text } = Typography;
  const [api, contextHolder] = notification.useNotification();
  const [roleValue, setRoleValue] = useState("ROLE_EMPLOYER");
  console.log(api);

  const navigate = useNavigate();
  const location = useLocation(); // sử dụng useLocation

  const onFinish = async (values: UserLoginType) => {
    const actionAsync = loginAPI(values);
    const isLoginSuccessful = await dispatch(actionAsync);
    dispatch(setIsLoginAction(true));

    if (isLoginSuccessful) {
      // Lấy trang trước đó hoặc trang mặc định
      const from = location.state?.from?.pathname || "/";
      navigate(from); // Điều hướng về trang trước đó sau khi đăng nhập
    }

    if (values.remember) {
      const encodedToken = encodePassword(values.password);
      setCookie("username", values.username, 30);
      setCookie("password", encodedToken, 30);
    }
  };

  //Google auth
  const handleClickGoogle = () => {
    const callbackUrl = OAuthConfig.redirectUri;
    const authUrl = OAuthConfig.authUri;
    const googleClientId = OAuthConfig.clientId;
    localStorage.setItem("role", roleValue);
    //Redirect to Google form auth
    const targetUrl = `${authUrl}?redirect_uri=${encodeURIComponent(
      callbackUrl
    )}&response_type=code&client_id=${googleClientId}&scope=openid%20email%20profile`;

    
    dispatch(setIsLoginAction(true));
    window.location.href = targetUrl;
  };

  useEffect(() => {
    const username = getCookie("username");
    let password = getCookie("password");

    if (username && password) {
      password = decodePassword(password);
      const actionAsync = loginAPI({ username, password });
      dispatch(actionAsync);
      dispatch(setIsLoginAction(true));
      form.setFieldsValue({ username, password });
    }
  }, []);

  const handleRoleChange = (key: string) => {
    // Update the role based on the selected tab
    if (key === "1") {
      setRoleValue("ROLE_EMPLOYER");
    } else if (key === "2") {
      setRoleValue("ROLE_APPLIER");
    }
  };

  return (
    <>
      {contextHolder}
      <Tabs
        className="LoginTabs"
        centered
        defaultActiveKey="1"
        onChange={handleRoleChange}
      >
        <Tabs.TabPane
          tab={
            <div>
              <Button
                color="primary"
                variant="text"
                className="w-[50px] h-[50px]"
                onClick={() => {
                  navigate("/", { replace: true });
                }}
              >
                <HomeTwoTone style={{ fontSize: "30px" }} />
              </Button>
            </div>
          }
        ></Tabs.TabPane>
        <Tabs.TabPane tab="Ứng viên" key="1">
          {/* Employer login form */}

          <div className="flex flex-col items-center gap-3">
            <div>
              <Title level={1} className="text-[20px] !mb-0 text-center">
                Ứng viên
              </Title>
            </div>
            <div className="flex gap-2 items-center">
              <Text type="secondary" className="text-[14px]">
                Chưa có tài khoản?
              </Text>
              <Link
                style={{ fontSize: "16px" }}
                onClick={() =>
                  activeKey !== "1"
                    ? handleTabChange("1")
                    : handleTabChange("2")
                }
              >
                Đăng ký ngay
              </Link>
            </div>
            <Button
              style={{ width: "100%", marginBottom: "2vh" }}
              size="large"
              onClick={() => handleClickGoogle()}
            >
              <img src={logoGoogle} alt="google" />
              Đăng nhập bằng Google
            </Button>
          </div>
          <div className=" w-[full] flex  items-center mb-4">
            <span className="block border-t border-blue-300 w-full mr-2"></span>{" "}
            Hoặc{" "}
            <span className="block border-t border-blue-300 w-full ml-2"></span>
          </div>
          <Form form={form} name="horizontal_login" onFinish={onFinish}>
            <div className="flex flex-col ">
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
                <Input
                  placeholder="Nhập email"
                  required
                  type="text"
                  className="h-10"
                />
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
                <Input.Password
                  className="h-10"
                  placeholder="Nhập mật khẩu"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                </Form.Item>
                <button
                  onClick={() => {
                    handleTabChange("3");
                  }}
                >
                  <a href="#">Quên mật khẩu</a>
                </button>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Nhà tuyển dụng" key="2">
          {/* Candidate login form */}
          <div className="flex flex-col items-center gap-3">
            <div>
              <Title level={1} className="text-[20px] !mb-0 text-center">
                Nhà tuyển dụng
              </Title>
            </div>
            <div className="flex gap-2 items-center ">
              <Text type="secondary" className="text-[14px]">
                Chưa có tài khoản?
              </Text>
              <Link
                style={{ fontSize: "16px" }}
                onClick={() =>
                  activeKey !== "1"
                    ? handleTabChange("1")
                    : handleTabChange("2")
                }
              >
                Đăng ký ngay
              </Link>
            </div>
            <Button
              style={{ width: "100%", marginBottom: "2vh" }}
              size="large"
              onClick={() => handleClickGoogle()}
            >
              <img src={logoGoogle} alt="google" />
              Đăng nhập bằng Google
            </Button>
          </div>
          <div className=" w-[full] flex  items-center mb-4">
            <span className="block border-t border-blue-300 w-full mr-2"></span>{" "}
            Hoặc{" "}
            <span className="block border-t border-blue-300 w-full ml-2"></span>
          </div>
          <Form form={form} name="horizontal_login" onFinish={onFinish}>
            <div className="flex flex-col ">
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
                <Input
                  className="h-10"
                  placeholder="Nhập email"
                  required
                  type="text"
                />
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
                <Input.Password
                  className="h-10"
                  placeholder="Nhập mật khẩu"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Ghi nhớ đăng nhập</Checkbox>
                </Form.Item>
                <button
                  onClick={() => {
                    handleTabChange("3");
                  }}
                >
                  <a href="#">Quên mật khẩu</a>
                </button>
              </Flex>
            </Form.Item>

            <Form.Item>
              <Button block type="primary" htmlType="submit">
                Đăng nhập
              </Button>
            </Form.Item>
          </Form>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
};
export default Login;
