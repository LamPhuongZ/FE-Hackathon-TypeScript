import { ReactNode } from "react";
import { DropdownProvider } from "./DropdownContext";

type Props = {
  children?: ReactNode;
  width?: string;
};

export default function Dropdown({ children, width = "w-full" }: Props) {
  return (
    <DropdownProvider>
        <div className={`relative inline-block ${width}`}>{children}</div>
    </DropdownProvider>
  );
}
