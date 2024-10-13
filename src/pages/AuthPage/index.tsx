import Button from "../../components/button/Button";
import { Modal } from "antd";
import { useState } from "react";

export default function AuthPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <div className="auth">
      <Button
        title="Đăng Nhập"
        onClick={() => {
          setIsModalOpen(true);
          setIsLogin(true);
        }}
      />

      <Modal
        title={
          <div className="text-4xl font-bold text-center">
            {isLogin ? "Login" : "Register"}
          </div>
        }
        centered
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        style={{
          maxWidth: 360,
        }}
      >
        <h1>Hello</h1>
      </Modal>
    </div>
  );
}
