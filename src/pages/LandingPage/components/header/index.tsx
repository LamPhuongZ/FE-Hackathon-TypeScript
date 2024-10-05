import { Hero } from "./hero";
import { Nav } from "./nav";
import logoCompany from "../../../../assets/images/logo-company.png";
import AuthPage from "../../../AuthPage";

export default function Header() {
  return (
    <header className="w-full h-[771px] pt-9 bg-custom-white">
      <div className="flex justify-center items-center gap-36 mb-12">
        <div className="flex justify-center items-center gap-2">
          <img
            src={logoCompany}
            alt="logo-company"
            width={"40px"}
            height={"40px"}
          />
          <h1 className="text-black text-lg font-bold capitalize">
            Việc Làm Dễ
          </h1>
        </div>
        <Nav />
        {/* <button className="px-[50px] py-4 bg-blue-600 rounded-lg text-white">Đăng Nhập</button> */}
        <AuthPage />
      </div>
      <Hero />
    </header>
  );
}
