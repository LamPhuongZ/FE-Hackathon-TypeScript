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
import { LuUserCircle2 } from "react-icons/lu";
import { useRole } from "../../hooks/useRole";
import { UserRole } from "../../enums/role.enum";
import { UnorderedListOutlined } from "@ant-design/icons";

export default function Header() {
  const navigate = useNavigate();
  const { role } = useRole();
  const dispatch: DispatchType = useDispatch();
  const { userProfile } = useSelector((state: RootState) => state.userReducer);

  const token = getCookie(ACCESS_TOKEN);
  const isEmployer = role === UserRole.ROLE_EMPLOYER;

  const handleScrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const itemsProfile = [
    {
      key: "1",
      style: { background: "none" },
      label: (
        <button
          onClick={() => {
            navigate("/profile");
          }}
        >
          <h1 className="text-xl flex items-center gap-2 p-3 hover:bg-green-500 w-full hover:text-white rounded transition">
            <LuUserCircle2 className="text-xl" />
            Trang cá nhân
          </h1>
        </button>
      ),
    },
    {
      style: { background: "none" },
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
    if (!token) {
      return;
    }

    getMe();
  }, []);

  // Dropdown menu header button
  const itemsHeader = [
    {
      label: (
        <>
          {token && isEmployer ? (
            <Link to="/form-application">
              <Button
                title="Đăng bài"
                color="custom"
                className="bg-[#2EE498] w-40"
                circle={false}
              />
            </Link>
          ) : (
            <li>
              <Link
                to="/list-job/:jobId?section=listJob"
                onClick={() => handleScrollToSection}
              >
                Tìm việc
              </Link>
            </li>
          )}
        </>
      ),
      key: "0",
    },
    {
      label: (
        <>
          <Link
            to="/policy-page?section=policy"
            onClick={() => handleScrollToSection}
          >
            Chính sách
          </Link>
        </>
      ),
      key: "1",
    },
    
    {
      label: (
        <>
          <Link
            to="/landing-page?section=about"
            onClick={() => handleScrollToSection}
          >
            Về chúng tôi
          </Link>
        </>
      ),
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: (
        <>
          {!userProfile ? (
            <Button
              title="Đăng nhập / Đăng ký"
              color="delete"
              className="btn__login"
              onClick={() => navigate("/login")}
              circle={false}
            />
          ) : (
            <Dropdown menu={{ items: itemsProfile }}>
              <div className="flex items-center gap-2">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                  <img
                    src={
                      userProfile.avatar || "https://via.placeholder.com/150"
                    }
                    alt="avatar"
                    className="w-full"
                    loading="lazy"
                  />
                </div>
                <a className="cursor-pointer max-w-[180px]">
                  <Space
                    className="font-bold leading-5 overflow-hidden "
                    style={{ maxWidth: "180px" }}
                  >
                    <p className="whitespace-nowrap !text-ellipsis">
                      {userProfile.fullname}
                    </p>
                  </Space>
                </a>
              </div>
            </Dropdown>
          )}
        </>
      ),
      key: "4",
    },
  ];
  return (
    <>
      <header className="header w-full !hidden sm:!block">
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
              {token && isEmployer ? (
                <Link to="/form-application">
                  <Button
                    title="Đăng bài"
                    color="custom"
                    className="bg-[#2EE498] w-40"
                    circle={false}
                  />
                </Link>
              ) : (
                <li>
                  <Link
                    to="/list-job/:jobId?section=listJob"
                    onClick={() => handleScrollToSection}
                  >
                    Tìm việc
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/policy-page?section=policy"
                  onClick={() => handleScrollToSection}
                >
                  Chính sách
                </Link>
              </li>
              <li>
                <Link
                  to="/landing-page?section=about"
                  onClick={() => handleScrollToSection}
                >
                  Về chúng tôi
                </Link>
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
                <Dropdown menu={{ items: itemsProfile }}>
                  <div className="flex items-center gap-2">
                    <div className="w-[50px] h-[50px] rounded-full overflow-hidden">
                      <img
                        src={
                          userProfile.avatar ||
                          "https://via.placeholder.com/150"
                        }
                        alt="avatar"
                        className="w-full"
                        loading="lazy"
                      />
                    </div>
                    <a className="cursor-pointer max-w-[180px]">
                      <Space
                        className="font-bold leading-5 overflow-hidden "
                        style={{ maxWidth: "180px" }}
                      >
                        <p className="whitespace-nowrap !text-ellipsis">
                          {userProfile.fullname}
                        </p>
                      </Space>
                    </a>
                  </div>
                </Dropdown>
              )}
            </div>
          </nav>
        </div>
      </header>
      <header className="header w-full !flex sm:!hidden  gap-3 flex-col items-center justify-center">
        <div>
          <Link to="/" className="link__logo flex items-center gap-2">
            <img
              src={logo}
              alt="icon-logo"
              width={40}
              height={40}
              loading="lazy"
            />
            <h1 className="title font-bold text-2xl">Việc làm dễ</h1>
          </Link>
        </div>
        <Dropdown className="self-start w-full" menu={{ items: itemsHeader }} trigger={["click"]}>
          <a className="!bg-blue-400 p-3 rounded" onClick={(e) => e.preventDefault()}>
            <Space><UnorderedListOutlined /></Space>
          </a>
        </Dropdown>
      </header>
    </>
  );
}
