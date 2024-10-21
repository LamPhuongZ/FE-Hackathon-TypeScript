import React, { useState } from "react";
import { Button, Flex, Form, Input, notification, Typography } from "antd";
import axios from "axios";

type ForgotPasswordProps = {
  handleTabChange: (key: string) => void;
};
export const ForgotPass: React.FC<ForgotPasswordProps> = ({
  handleTabChange,
}) => {
  const { Title, Text } = Typography;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values: any) => {
    try {
      setLoading(true);
      // Call the API to send reset password email
      const response = await axios.post(
        `https://api.easyjob.io.vn/api/v1/auth/forget-password?email=${values.email}`,
        values,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response
      if (response) {
        notification.success({
          message: "Thành công",
          description: "Vui lòng check email để nhận link thay đổi mật khẩu",
          placement: "topRight",
          duration: 1.5,
        });
        handleTabChange("1");
      }
    } catch (error) {
      console.log(error);
      notification.error({
        message: "Chưa thành công",
        description: "Vui lòng nhập lại email của bạn!",
        placement: "topRight",
        duration: 1.5,
      });
    } finally {
      setLoading(false);
    }
    // Show success notification
  };

  return (
    <>
      {!loading ? (
        //nút để quay về trang home
        
        <div className="flex flex-col  items-center gap-5">
          <Button
          className="w-[200px] mt-5"
          onClick={() => handleTabChange("1")}
        >
          Về trang đăng nhập
        </Button>
          <Title level={1} className="text-[20px] !mb-0">
            Quên mật khẩu!
          </Title>
          <Text className="text-[14px]">
            Nhập email của bạn để nhận link thay đổi mật khẩu
          </Text>
          <Form form={form} name="horizontal_login" onFinish={onFinish}>
            <div className="flex flex-col items-center !w-[500px]" >
            <Form.Item
            className="w-[80%]"
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Hãy nhập email của bạn",
                },
              ]}
            >
              <Input  size="large" placeholder="Email" />
            </Form.Item>
            <Form.Item >
              <Button type="primary" htmlType="submit" size="large">
                Gửi yêu cầu
              </Button>
            </Form.Item>

            </div>
          </Form>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-5">
          <div className="w-32 aspect-square rounded-full relative flex justify-center items-center animate-[spin_3s_linear_infinite] z-40 bg-[conic-gradient(white_0deg,white_300deg,transparent_270deg,transparent_360deg)] before:animate-[spin_2s_linear_infinite] before:absolute before:w-[60%] before:aspect-square before:rounded-full before:z-[80] before:bg-[conic-gradient(white_0deg,white_270deg,transparent_180deg,transparent_360deg)] after:absolute after:w-3/4 after:aspect-square after:rounded-full after:z-[60] after:animate-[spin_3s_linear_infinite] after:bg-[conic-gradient(#065f46_0deg,#065f46_180deg,transparent_180deg,transparent_360deg)]">
            <span className="absolute w-[85%] aspect-square rounded-full z-[60] animate-[spin_5s_linear_infinite] bg-[conic-gradient(#34d399_0deg,#34d399_180deg,transparent_180deg,transparent_360deg)]"></span>
          </div>
        </div>
      )}
    </>
  );
};
