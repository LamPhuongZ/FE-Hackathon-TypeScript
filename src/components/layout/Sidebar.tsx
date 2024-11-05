import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/configStore";
import { useSelector } from "react-redux";
import { VscLock } from "react-icons/vsc";

export default function Sidebar() {
  const { userProfile } = useSelector((state: RootState) => state.userReducer);

  const Profile = () => (
    <NavLink
      to={`/profile`}
      className={({ isActive }) =>
        `flex items-center justify-center gap-4 p-3 font-medium cursor-pointer hover:bg-blue-200 rounded-xl ${
          isActive ? " bg-blue-200 rounded-xl font-semibold text-[#3F8CFF]" : ""
        }`
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>

      <span className="mt-1 text-xl">Thông Tin Cá Nhân</span>
    </NavLink>
  );
  // const danhSachUngVien = () => (
  //   <NavLink
  //     to={`/list-candidated`}
  //     className={({ isActive }) =>
  //       `flex items-center justify-center gap-4 p-3 font-medium cursor-pointer hover:bg-blue-200 rounded-xl ${
  //         isActive ? " bg-blue-200 rounded-xl font-semibold text-[#3F8CFF]" : ""
  //       }`
  //     }
  //   ></NavLink>
  // );

  const WorkManager = () => (
    <NavLink
      to={`/work-manager`}
      className={({ isActive }) =>
        `flex items-center justify-center gap-4 p-3 font-medium cursor-pointer hover:bg-blue-200 rounded-xl ${
          isActive ? " bg-blue-200 rounded-xl font-semibold text-[#3F8CFF]" : ""
        }`
      }
      end
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
        />
      </svg>

      <span className="mt-1 text-xl">Quản Lí Công Việc</span>
    </NavLink>
  );

  const ChangePasswordPage = () => (
    <NavLink
      to={`/change-password`}
      className={({ isActive }) =>
        `flex items-center justify-center gap-4 p-3 font-medium cursor-pointer hover:bg-blue-200 rounded-xl ${
          isActive ? " bg-blue-200 rounded-xl font-semibold text-[#3F8CFF]" : ""
        }`
      }
      end
    >
      <VscLock className="w-6 h-6" />
      <span className="mt-1 text-xl">Thay đổi mật khẩu</span>
    </NavLink>
  );

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-8 justify-center">
          <div className="w-16 h-16 ">
            <img
              src={userProfile?.avatar || "https://via.placeholder.com/150"}
              alt="avatar"
              className="w-full h-full object-cover rounded-full bg-slate-300"
              loading="lazy"
            />
          </div>
          <h3 className="font-semibold text-xl">{userProfile?.fullname}</h3>
        </div>
        <div className="border-2 border-solid"></div>
        <Profile />
        <WorkManager />
        <ChangePasswordPage />
      </div>
    </div>
  );
}
