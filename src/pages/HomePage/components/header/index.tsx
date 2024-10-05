import logo from "../../../../assets/images/logo-company.png";
import AuthPage from "../../../AuthPage";

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
        <div className="flex items-center gap-10 text-2xl font-medium px-48">
          <div>
            <h1 className="">Tìm việc</h1>
          </div>
          <div>
            <h1 className="">Chính sách</h1>
          </div>
          <div>
            <h1 className="">Về chúng tôi</h1>
          </div>
        </div>
        <div className="flex items-center text-2xl font-medium">
          {/* <button className="bg-[#3F8CFF] py-[16px] px-[30px] rounded-xl text-white">
            <h1 className="">Đăng nhập</h1>
          </button> */}
          <AuthPage />
        </div>
      </div>
    </div>
  );
}
