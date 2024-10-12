import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className: string;
}

/** 
    @type  children: ReactNode;
  className: string;
*/

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`flex flex-col justify-center ${className} `}>
      {children}
    </div>
  );
}