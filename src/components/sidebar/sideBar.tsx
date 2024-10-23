import { NavLink } from "react-router-dom";
import { UserOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import Ava from "../../assets/images/ava.jpg";


const Sidebar = () => {
  const ProfileLink = () => (
    <NavLink
      to={`/profile`}
      className={({ isActive }) =>
        `flex ml-10  items-center gap-4 p-3 font-medium cursor-pointer hover:bg-primary ${isActive ? "bg-button-color bg-blue-200 rounded-xl font-semibold text-blue-500" : ""
        }`
      }
    >
      <UserOutlined />
      <span className="mt-2">Thông Tin Tài Khoản</span>
    </NavLink>
  );
  const WorkManagement = () => (
    <NavLink
      to={`/task`}
      className={({ isActive }) =>
        `flex ml-10 items-center gap-4 p-3 font-medium cursor-pointer hover:bg-primary ${isActive ? "bg-button-color bg-blue-200 rounded-xl font-semibold text-blue-500" : ""
        }`
      }
    >
      <UsergroupAddOutlined />
      <span className="">Quản Lí Công Việc</span>
    </NavLink>
  );

  return (
    <div className="w-[300px]">
      <div className="col1-infor flex flex-row gap-2 ml-10 mt-8">
        <div className="w-14 h-14 overflow-hidden rounded-full">
          <img
            src={Ava}
            alt="Ảnh đại diện"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="col1-infor-name flex flex-col justify-center">
          <h3 className="font-semibold text-xl">Nguyễn Văn A</h3>
        </div>
      </div>
      <hr className="mt-4 mb-2 w-[85%] ml-10" />
      <div className="flex flex-col gap-3">
        <ProfileLink />
        <WorkManagement />
      </div>
    </div>
  );
};

export default Sidebar;
