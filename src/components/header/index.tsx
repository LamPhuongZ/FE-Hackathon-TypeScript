import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-company.png";
import AuthPage from "../../pages/AuthPage";

export default function Header() {
  return (
    <div className="px-[112px] py-[24px]">
      <div className="flex items-center capitalize justify-evenly">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10">
            <img src={logo} alt="" className="w-full h-full" />
          </div>
          <h1 className="text-3xl font-bold">Việc làm dễ</h1>
        </div>
        <ul className="flex items-center gap-10 text-2xl font-medium px-48">
          <li>
            <Link to="/">Tìm việc</Link>
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
