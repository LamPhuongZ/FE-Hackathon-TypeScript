import React, { ReactNode } from "react";

type Props = {
  name: string;
  type?: string;
  content?: string;
  placeholder: string;
  className ?:string
};

export default function Input({
  name,
  type = "text",
  placeholder,
  content,
  className
}: Props) {
  return (
    <input
      id={name}
      type={type}
      className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:outline-none focus:ring-1 focus:ring-[#3F8CFF] ${className}`}
      placeholder={placeholder}
    >
      {content}
    </input>
  );
}
