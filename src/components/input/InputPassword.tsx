import React, { ReactNode, useState } from "react";
import IconEyeOpen from "../iconEye/IconEyeOpen";
import IconEyeClose from "../iconEye/IconEyeClose";
import { useController } from "react-hook-form";
import { Control } from "react-hook-form";

type Props = {
  name: string;
  type?: string;
  children?: ReactNode;
  placeholder?: string;
  disabled?: boolean;
  control?: object;
  togglePassword?: boolean; // Thêm prop này
  setTogglePassword?: (value: boolean) => void; // Thêm prop này
};

export default function InputPassword({
  name = "",
  placeholder,
  children,
  control,
  disabled = false,
  type, // Đặt giá trị mặc định cho type
  togglePassword, // Nhận togglePassword từ props
  setTogglePassword, // Nhận setTogglePassword từ props
}: Props) {
  const { field } = useController({
    control: control as Control<Props>,
    name: name as keyof Props,
    defaultValue: "",
  });

  return (
    <div className="relative w-full">
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        {...field}
        disabled={disabled}
        className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:outline-none focus:ring-1 transition-all  ${
          children ? "px-5 pr-[60px] pl-[20px]" : "px-5 pr-[60px] pl-[20px]"
        }`}
        value={field.value as string}
      />
      {
        <div className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer">
          {!togglePassword ? (
            <IconEyeClose
              onClick={() => setTogglePassword && setTogglePassword(true)}
            ></IconEyeClose>
          ) : (
            <IconEyeOpen
              onClick={() => setTogglePassword && setTogglePassword(false)}
            ></IconEyeOpen>
          )}
        </div>
      }
    </div>
  );
}
