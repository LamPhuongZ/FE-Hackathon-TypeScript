import React from "react";
import checked from "../../assets/images/checked.png";
import location from "../../assets/images/location.png";
import calendar from "../../assets/images/calender.png";

type Props = {};

export default function JobCard({}: Props) {
  return (
    <div className="w-[447px] h-[327px] px-6 py-4 bg-white rounded-2xl shadow-md">
      <div className="flex flex-col gap-y-5">
        <p className="text-[#CCC] text-xl font-medium">Đăng: 05-10-2024 </p>
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold">Vệ sinh căn hộ, gia đình</h1>
          <div className="w-6 h-6">
            <img src={checked} alt="" className="w-full h-full" />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="w-5 h-5">
            <img src={location} alt="" className="w-full h-full" />
          </div>
          <h1 className="text-xl font-semibold text-[#5B5B5B]">
            Số 5 đường 5, phường 5
          </h1>
        </div>
        <div className="border border-solid"></div>
        <div className="flex gap-4">
          <div className="w-5 h-5">
            <img src={calendar} alt="" className="w-full h-full" />
          </div>
          <h1 className="text-xl font-semibold text-[#5B5B5B]">
            Ngày bắt đầu làm việc
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-[340px] h-[70px] rounded-[20px] border border-solid">
            <p className="text-2xl font-semibold px-[60px] py-5">
              07-10-2024 - 14:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
