import banner1 from "../../../../assets/images/banner1.png";
import banner2 from "../../../../assets/images/banner2.png";

export default function Banner() {
  return (
    <div className="bg-[#6da2f139] py-4 shadow-2xl flex items-center justify-evenly gap-0 mt-[29px]">
      <div className="w-52 h-52">
        <img src={banner1} alt="" className="w-full h-full" />
      </div>
      <div className="lg:w-[1250px] text-center cssanimation typing">
        <h1 className="text-[50px] font-semibold capitalize text-[#5694f0]">
          Kết nối việc làm, Cơ hội mới, cuộc sống mới
        </h1>
      </div>
      <div className="w-52 h-52">
        <img src={banner2} alt="" className="w-full h-full mb-2" />
      </div>
    </div>
  );
}
