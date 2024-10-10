import React from "react";
import location from "../../assets/images/location.png";
import star from "../../assets/icons/star.svg";

type Props = {};

export default function ListCardPage({}: Props) {
  return (
    <div className="py-20 px-[72px]">
      <div className="bg-white py-4 shadow-md px-11">
        <h1 className="text-[40px] font-bold mb-5">
          Danh sách công việc đã hoàn thành
        </h1>
        <div className="w-[779px] border-[3px] border-solid border-[#2EE498] "></div>

        <div className="mt-14">
          <div className="shadow-lg w-full rounded-3xl">
            <div className="px-5 flex gap-9">
              <div className="w-[200px] h-[162.928px]">
                <img
                  src="https://haenglish.edu.vn/wp-content/uploads/2023/08/Top-10-Highest-Paying-Jobs-in-India-03.jpg"
                  alt=""
                  className=" w-full h-full rounded-[10px] object-cover"
                />
              </div>
              <div className="w-full flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h1 className="text-4xl font-bold">Giao hàng</h1>
                  <div className="flex">
                    <div className="w-8 h-8">
                      <img src={location} alt="" className="w-full h-full" />
                    </div>
                    <h1 className="text-2xl font-semibold">
                      Số 5 đường 5, phường 5
                    </h1>
                  </div>
                </div>
                <div className="border border-solid border-[#E4E6E8]"></div>
                <div className="flex items-center">
                  <div className="rounded-[20px] bg-[#E8E8E8] flex items-center justify-center px-6 py-2">
                    <p className="font-bold text-xl">Giao hàng</p>
                  </div>
                  <div className="border border-solid rotate-180 border-black h-[35px] mx-5"></div>
                  <div className="flex justify-between w-[800px]">
                  <div className="flex items-center">
                    <p className="font-medium text-2xl">1/10/2024 - 14:00</p>
                    <div className="border border-solid border-black w-11 mx-5"></div>
                    <p className="font-medium text-2xl">1/10/2024 - 20:00 </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8">
                      <img src={star} alt="" className="w-full h-full" />
                    </div>
                    <h1 className="text-3xl font-medium">4.0</h1>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
