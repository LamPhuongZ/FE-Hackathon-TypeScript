import React from "react";
import { Button, Flex, Form, Input, Typography, Spin } from "antd";
import type { GetProps } from "antd";

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

export const OTP = () => {
  const onChange: OTPProps["onChange"] = (text) => {
    console.log("onChange:", text);
  };
  const sharedProps: OTPProps = {
    onChange,
  };
  return (
    <>
      <Form>
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
            <Button size="large"  variant={'filled'} color='primary'>Verify</Button>
        </Form.Item>

        </Flex>
      </Form>
    </>
  );
};
