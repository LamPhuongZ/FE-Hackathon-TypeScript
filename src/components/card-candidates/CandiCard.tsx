import React from "react";
import checked from "../../assets/images/checked.png";
import star from "../../assets/icons/star.svg";
type Props = {
  className?: string;
};

export default function CandiCard({ className }: Props) {
  return (
    <div
      className={`bg-white rounded-3xl shadow-md hover:shadow-xl flex gap-9 py-6 px-9 ${className}`}
    >
      <div className="w-[130px] h-[122px]">
        <img
          src=""
          alt="avatar"
          className="bg-[#E8E8E8] w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex justify-between items-center gap-5 ">
          <div className="flex items-center gap-5">
            <h1 className="text-3xl font-semibold">Danh Thị Mẫn</h1>
            <div className="w-6 h-6 small-tablet:w-4 small-tablet:h-4">
              <img
                src={checked}
                alt="checked"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="font-semibold flex items-center gap-2">
            <p className="text-base">Số việc đã hoàn thành : </p>
            <p className="text-3xl">20</p>
          </div>
        </div>
        <div className="border border-solid border-[#E4E6E8]"></div>
        <div className="flex justify-between">
          <div className="bg-[#E8E8E8] rounded-[20px]">
            <p className="text-lg font-medium px-[10px] py-[5px] small-tablet:text-sm small-tablet:px-[5px] small-tablet:py-[3px]">
              Giao hàng
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6">
                <img src={star} alt="" className="w-full h-full"/>
            </div>
            <p className="text-3xl font-medium pt-1">4.0</p>
          </div>
        </div>
      </div>
    </div>
  );
}
