import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-company.png";
import Button from "../button/Button";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header__group">
        <Link to="/" className="link__logo">
          <img
            src={logo}
            alt="icon-logo"
            width={40}
            height={40}
            loading="lazy"
          />
          <h1 className="title">Việc làm dễ</h1>
        </Link>
        <nav className="nav">
          <ul className="menu">
            <li>
              <Link to="/find-job">Tìm việc</Link>
            </li>
            <li>
              <Link to="/policy-page">Chính sách</Link>
            </li>
            <li>
              <Link to="/landing-page">Về chúng tôi</Link>
            </li>
          </ul>
          <div className="btn__auth">
            <Button
              title="Đăng nhập / Đăng ký"
              color="custom"
              className="btn__login"
              onClick={() => navigate("/login")}
              circle={false}
            />
          </div>
        </nav>
      </div>
    </header>
  );
}
