import { Button, Flex, Form, Input } from "antd";
import type { GetProps } from "antd";

type OTPProps = GetProps<typeof Input.OTP>;

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
          <Form.Item name="otp">
            <Input.OTP size={"large"} variant={"filled"} {...sharedProps} />
          </Form.Item>
          <Form.Item>
            <Button size="large" color="primary">
              Gửi lại mã
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              size="large"
              variant={"filled"}
              color="primary"
            >
              Verify
            </Button>
          </Form.Item>
        </Flex>
      </Form>
    </>
  );
};
