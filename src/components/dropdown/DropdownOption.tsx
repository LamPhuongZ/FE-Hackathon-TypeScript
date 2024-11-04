import { ReactNode } from "react";
import { useDropdown } from "./DropdownContext";

type Props = {
  onClick?: () => void;
  children: ReactNode;
  name: string;
};

export default function DropdownOption({ onClick, children, name }: Props) {
  const { setShow } = useDropdown();
  const handleClick = () => {
    onClick?.();
    setShow(false);
  };
  return (
    <div
      id={name}
      className="px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-100 transition-colors duration-250"
      onClick={handleClick}
    >
      {children}
    </div>
  );
}
