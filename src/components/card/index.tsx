import { ReactNode } from "react";

type CardProps = {
  width: string;
  height: string;
  bgColor?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  padding?: string;
  children: ReactNode;
};

/** 
    @type  width: string;
  height: string;
  bgColor?: string;
  border?: string;
  borderColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  padding?: string;
  children: ReactNode;
*/

export default function Card({
  width,
  height,
  bgColor = "#fff",
  border = "1px solid",
  borderColor = "#6da2f139",
  borderRadius = "8px",
  boxShadow,
  padding = "16px",
  children,
}: CardProps) {
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: bgColor,
        border,
        borderColor,
        borderRadius,
        boxShadow,
        padding,
      }}
      className="flex flex-col justify-center"
    >
      {children}
    </div>
  );
}
