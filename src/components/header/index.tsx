import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-company.png";
import AuthPage from "../../pages/AuthPage";

export default function Header() {
  return (
    <div className=" px-10 py-8 bg-white">
      <div className="flex capitalize justify-between">
        <Link to="/" className="flex justify-center gap-2">
          <img src={logo} alt="" className="h-10" loading="lazy" />
          <h1 className="text-[28px] font-bold">Việc làm dễ</h1>
        </Link>
        <ul className="flex items-center gap-10 text-2xl font-medium ">
          <li>
            <Link to="/find-job">Tìm việc</Link>
          </li>
          <li>
            <Link to="/">Chính sách</Link>
          </li>
          <li>
            <Link to="/landing-page">Về chúng tôi</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <AuthPage />
        </div>
      </div>
    </div>
  );
}
