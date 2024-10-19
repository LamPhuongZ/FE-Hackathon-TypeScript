import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-company.png";
import AuthPage from "../../pages/AuthPage";

export default function Header() {
  return (
    <div className="px-[112px] py-[24px]">
      <div className="flex items-center justify-between capitalize">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="" className="w-10 h-10" loading="lazy" />
          <h1 className="text-4xl h-full font-semibold mt-1">Việc làm dễ</h1>
        </Link>
        <div className="flex items-center">
          <ul className="flex gap-10 text-xl font-medium pr-[48px]">
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
    </div>
  );
}
