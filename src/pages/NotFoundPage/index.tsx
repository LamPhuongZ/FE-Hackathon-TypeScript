import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="container-wrapper">
      <div className="">
        <h1>404</h1>
      </div>
      <div className="content">
        <h1>Thông tin đang được cập nhật</h1>
        <Button title="Về Trang Chủ" onClick={() => navigate("/")} />
      </div>
    </div>
  );
}
