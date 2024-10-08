import Vector from "../../../../assets/images/Vector.png";
import how1 from "../../../../assets/images/how1.png";
import how2 from "../../../../assets/images/how2.png";
import how3 from "../../../../assets/images/how3.png";
import how4 from "../../../../assets/images/how4.png";
import how5 from "../../../../assets/images/how5.png";
import how6 from "../../../../assets/images/how6.png";
import Google from "../../../../assets/images/Google.png";

const HowItWorks = () => {
  return (
    <div className="">
      <div className="flex flex-col 2xl:mx-[210px] py-20">
        <div className="flex items-center flex-col">
          <h1 className="capitalize text-5xl font-medium">
            quy trình của chúng tôi
          </h1>
          <div className="w-[500px] mt-4">
            <img src={Vector} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="w-full mt-16 px-28">
          <div className="flex justify-start ">
            <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#37A3FF] z-50">
              <p className="text-9xl font-black opacity-15 absolute -top-20 -left-11">
                01
              </p>
              <div className="w-[800px] h-56 flex gap-10">
                <div className="w-64 h-52 ">
                  <img src={how1} alt="" className="w-full h-full" />
                </div>
                <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                  <p className=" text-4xl font-bold leading-[50px]">
                    Đăng ký hoặc đăng nhập bằng{" "}
                    <img
                      src={Google}
                      alt=""
                      className="inline-block w-10 h-10"
                    />
                    mail
                  </p>
                  <div className="border-2 border-[#37A3FF] w-20"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#54BD95] z-40">
              <p className="text-9xl font-black opacity-15 absolute -top-20 -right-11">
                02
              </p>
              <div className="w-[800px] h-56 flex gap-10">
                <div className="w-64 h-52 ">
                  <img src={how2} alt="" className="w-full h-full" />
                </div>
                <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                  <p className="text-4xl font-bold leading-[50px]">
                    Cập nhập thông tin bản thân
                  </p>
                  <div className="border-2 border-[#54BD95] w-20"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start ">
            <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#FFDC4D] z-30">
              <p className="text-9xl font-black opacity-15 absolute -top-20 -left-11">
                03
              </p>
              <div className="w-[800px] h-56 flex gap-10">
                <div className="w-60 h-52 ">
                  <img src={how3} alt="" className="w-full h-full" />
                </div>
                <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                  <p className=" text-4xl font-bold leading-[50px]">
                    Khám phá tìm công việc mình muốn
                  </p>
                  <div className="border-2 border-[#FFDC4D] w-20"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#FFBF60] z-20">
              <p className="text-9xl font-black opacity-15 absolute -top-20 -right-11">
                04
              </p>
              <div className="w-[800px] h-56 flex gap-10">
                <div className="w-60 h-52 ">
                  <img src={how4} alt="" className="w-full h-full" />
                </div>
                <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                  <p className="text-4xl font-bold leading-[50px]">
                    Xem thông tin chi tiết công việc
                  </p>
                  <div className="border-2 border-[#FFBF60] w-20"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start ">
            <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#54BD95] z-10">
              <p className="text-9xl font-black opacity-15 absolute -top-20 -left-11">
                05
              </p>
              <div className="w-[800px] h-56 flex gap-10">
                <div className="w-60 h-52 ">
                  <img src={how5} alt="" className="w-full h-full" />
                </div>
                <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                  <p className=" text-4xl font-bold leading-[50px]">
                    Ứng tuyển khi thấy phù hợp
                  </p>
                  <div className="border-2 border-[#54BD95] w-20"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-white rounded-xl shadow-2xl w-[800px] h-[250px] pt-8 pb-6 px-8 relative text-[#FF5758] z-0">
              <p className="text-9xl font-black opacity-15 absolute -top-20 -right-11">
                06
              </p>
              <div className="w-[800px] h-56 flex gap-10">
                <div className="w-64 h-52 ">
                  <img src={how6} alt="" className="w-full h-full" />
                </div>
                <div className="flex gap-5 justify-center w-[450px] flex-col pb-10">
                  <p className="text-4xl font-bold leading-[50px]">
                    Hoàn thành mục tiêu ứng tuyển
                  </p>
                  <div className="border-2 border-[#FF5758] w-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
