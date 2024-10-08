import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-company.png";
import AuthPage from "../../pages/AuthPage";

export default function Header() {
  return (
    <div className="px-[112px] py-[24px]">
      <div className="flex items-center capitalize justify-center">
        <Link to="/" className="flex justify-center items-center gap-2">
          <img src={logo} alt="" className="w-10 h-10" loading="lazy" />
          <h1 className="text-[28px] w-60 h-full  font-bold">Việc làm dễ</h1>
        </Link>
        <ul className="flex justify-center items-center gap-10 text-2xl font-medium px-48">
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
        <div className="flex items-center text-2xl font-medium">
          <AuthPage />
        </div>
      </div>
    </div>
  );
}
