import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-company.png";
import Button from "../button/Button";
import LogOut from "../../pages/AuthPage/LogOut";
import  {  useEffect } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { getProfileAPI } from "../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";

export default function Header() {
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  const isLogin = useSelector((state: RootState) => state.userReducer.isLogin);
  
  // const [isLogin, setIsLogin] = useState(false);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <button 
          onClick={() => {
            navigate("/profile");
          }}
        >
          <li>
              <Link to="/find-job">Trang cá nhân</Link>
            </li>
          {/* <a target="_blank" href="#">
            Trang cá nhân
          </a> */}
        </button>
      ),
    },
    {
      key: "2",
      label: <LogOut />,
    },
  ];

  const getMe = async () => {
    const actionAPI = getProfileAPI();
    dispatch(actionAPI);
  };

  useEffect(() => {
    getMe();
  }, []);

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
          {
            !isLogin ? <Button
              title="Đăng nhập / Đăng ký"
              color="custom"
              className="btn__login"
              onClick={() => navigate("/login")}
              circle={false}
            /> : 
            <Dropdown menu={{ items }}>
              <a className="cursor-pointer">
                <Space>Tài khoản</Space>
              </a>
            </Dropdown>
          }
            
          </div>
        </nav>
      </div>
    </header>
  );
}
