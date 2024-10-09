import React from "react";

type Props = {
  children: string;
  className?: string;
  type?: string;
};

export default function Button({
  children,
  className,
  type = "button",
}: Props) {
  return (
    <button
      type={type as "button" | "submit" | "reset"}
      className={`w-full h-16 cursor-pointer transition-all bg-[#3F8CFF] text-white px-6 py-2 rounded-xl
    border-blue-600
    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-2xl font-bold ${className}`}
    >
      {children}
    </button>
  );
}
