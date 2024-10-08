import { useNavigate } from "react-router-dom";
import bgImage from "../../assets/gifs/404.gif";
import Button from "../../components/button";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div
      className="container-wrapper relative h-[700px] bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "inherit" }}
    >
      <div className="error mt-10 absolute left-1/2 top-1/5 text-center transform -translate-x-1/2 rotate-10 ">
        <h1 className="text-slate-900 text-9xl font-bold">404</h1>
      </div>
      <div className="content absolute left-1/2 top-[70%] text-center transform -translate-x-1/2">
        <h1 className="text-slate-900 text-3xl font-bold">Thông tin đang được cập nhật</h1>
        <Button margin="20px" title="Về Trang Chủ" onClick={() => navigate("/")} />
      </div>
    </div>
  );
}