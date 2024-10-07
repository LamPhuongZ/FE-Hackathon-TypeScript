import React from "react";
import checked from "../../assets/images/checked.png";

type Props = {};

export default function ListJobPage({}: Props) {
  return (
    <div className="p-4">
      <div className="w-[447px] h-[327px] rounded-2xl shadow-md px-6 py-4 flex-col gap-4">
        <p className="text-[#CCCCCC] text-[20px] font-medium">
          Đăng: 05-10-2024
        </p>
        <div className="flex gap-4 items-center">
          <h1 className="text-2xl font-bold">Vệ sinh căn hộ, gia đình</h1>
          <div className="w-6 h-6">
            <img src={checked} alt="" className="w-full h-full"/>
          </div>
        </div>
      </div>
    </div>
  );
}
