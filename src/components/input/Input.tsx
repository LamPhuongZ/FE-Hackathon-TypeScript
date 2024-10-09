import React, { ReactNode } from "react";

type Props = {
  name: string;
  type?: string;
  content?: string;
  placeholder: string;
};

export default function Input({
  name,
  type = "text",
  placeholder,
  content,
}: Props) {
  return (
    <input
      id={name}
      type={type}
      className="w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:bg-white focus:border-red-400"
      placeholder={placeholder}
    >
      {content}
    </input>
  );
}
