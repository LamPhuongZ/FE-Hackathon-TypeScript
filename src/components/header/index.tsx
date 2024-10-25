import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-company.png";
import Button from "../button/Button";
import LogOut from "../../pages/AuthPage/LogOut";
import { useEffect } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { getProfileAPI } from "../../redux/reducers/userReducer";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, RootState } from "../../redux/configStore";
import { getCookie } from "../../utils/utilMethod";
import { ACCESS_TOKEN } from "../../utils/config";

// getProfileAPI
export default function Header() {
  const navigate = useNavigate();
  const dispatch: DispatchType = useDispatch();
  const { userProfile } = useSelector((state: RootState) => state.userReducer);
  
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
            <Link to="">Trang cá nhân</Link>
          </li>
        </button>
      ),
    },
    {
      key: "2",
      label: <LogOut />,
    },
  ];

  const getMe = async () => {
    const actionAPI = await getProfileAPI();
    dispatch(actionAPI);
  };

  useEffect(() => {
    //reset Token
    const Token = getCookie(ACCESS_TOKEN);
    if (!Token) {
      return;
    }

    getMe();
  }, []);
  // console.log(role)

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
            {!userProfile ? (
              <Button
                title="Đăng nhập / Đăng ký"
                color="custom"
                className="btn__login"
                onClick={() => navigate("/login")}
                circle={false}
              />
            ) : (
              <Dropdown menu={{ items }}>
                <div className="flex items-center gap-2">
                  <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                    <img
                      src={userProfile.avatar}
                      alt="avatar"
                      className="w-full"
                      loading="lazy"
                    />
                  </div>
                  <a className="cursor-pointer">
                    <Space className="font-bold leading-5">
                      {userProfile.fullname}{" "}
                    </Space>
                  </a>
                </div>
              </Dropdown>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
