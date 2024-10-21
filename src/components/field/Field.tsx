import { ReactNode } from "react";

type Props = {
  className?: string;
  children?:ReactNode
};

export default function Field({ children, className }: Props) {
  return (
    <div className={`flex flex-col items-start gap-x-5 mb-5 last-of-type:mb-0 ${className}`}>
      {children}
    </div>
  );
}
