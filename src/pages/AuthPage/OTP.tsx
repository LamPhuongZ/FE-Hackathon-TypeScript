// import React, { useState } from "react";
// import { Button, Flex, Form, Input, Typography, Spin, message } from "antd";
// import type { GetProps } from "antd";

// type OTPProps = GetProps<typeof Input.OTP>;

// const { Title } = Typography;

export const OTP = () => {
  // const [form] = Form.useForm();
  // const [loading, setLoading] = useState(false);
  // const onChange: OTPProps["onChange"] = (text) => {
  //   console.log("onChange:", text);
  // };
  // const sharedProps: OTPProps = {
  //   onChange,
  // };

  

  // const onFinish = async (values:any) => {
  //   setLoading(true);
  //   try {
  //     // Simulate API call to create a user
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
  //     message.success('Signup successful!');
  //     form.resetFields();
  //   } catch (error) {
  //     message.error('Failed to signup');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // const onFinishFailed = (errorInfo:any) => {
  //   console.log('Failed:', errorInfo);
  // };
  return (
    <>
      {/* <Form>
        <Flex gap="middle" align="center" vertical={true}>
        <Form.Item  name="otp">
          
            <Input.OTP
                size={'large'}
                variant={'filled'}
              {...sharedProps}
            />
          
        </Form.Item>
        <Form.Item>
            <Button size="large" color='primary'>Gửi lại mã</Button>
        </Form.Item>
        <Form.Item>
            <Button htmlType="submit" size="large"  variant={'filled'} color='primary'>Verify</Button>
        </Form.Item>

        </Flex>
      </Form> */}
    </>
  );
};
