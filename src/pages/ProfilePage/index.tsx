import React from "react";

type Props = {};

export default function ProfilePage({}: Props) {
    return (
      <div className="py-4 px-[72px]">
        <div className="bg-white">
          <div className="mb-10 flex items-start justify-between">
            <div>
              <h1 className="text-[40px] font-semibold">Thông tin tài khoản</h1>
              <p className="text-xl font-semibold text-[rgba(10,_22,_41,_0.50)]">Cập nhật thông tin tài khoản</p>
            </div>
          </div>
          <form>
            <div className="w-[200px] h-[200px] rounded-full mx-auto mb-10"></div>
          </form>
        </div>
      </div>
    );
  }