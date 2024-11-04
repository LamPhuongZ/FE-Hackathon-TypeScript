import { ReactNode } from "react";
import { useDropdown } from "./DropdownContext";

type Props = {
  children: ReactNode;
  height?: string;
  width?: string; 
};

export default function DropdownList({ children, height = "h-[500px]", width = "w-full"  }: Props) {
  const { show } = useDropdown();
  return (
    <>
      <div className={`absolute top-full left-0 w-full bg-white shadow-sm ${height} max-h-[300px] overflow-y-auto z-[99999999] ${width} transition-opacity duration-200 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {children}
      </div>
    </>
  );
}
