import React, { ReactNode } from "react";
import { useDropdown } from "./DropdownContext";

type Props = {
  children: ReactNode;
};

export default function DropdownList({ children }: Props) {
  const { show } = useDropdown();
  return (
    <>
      {show && (
        <div className="absolute top-full left-0 w-full bg-white shadow-sm">
          {children}
        </div>
      )}
    </>
  );
}
