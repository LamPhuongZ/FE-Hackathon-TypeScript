import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className: string;
  onClick?: () => void;
}

/** 
    @type  children: ReactNode;
  className: string;
*/

export default function Card({ children, className, onClick }: CardProps) {
  return (
    <div className={`flex flex-col justify-center ${className} `} onClick={onClick}>
      {children}
    </div>
  );
}