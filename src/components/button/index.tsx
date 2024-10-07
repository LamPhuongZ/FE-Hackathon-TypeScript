import { ReactNode } from "react";

type ButtonProps = {
  title: string | ReactNode;
  loading?: boolean;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  margin?: string;
  onClick?: () => void;
};

export default function Button({
  title,
  loading,
  color,
  bgColor,
  borderColor,
  margin,
  onClick,
}: ButtonProps) {
  return (
    <button
      style={{
        color: color,
        backgroundColor: bgColor,
        borderColor: borderColor,
        margin: margin,
      }}
      className=""
      onClick={onClick}
      disabled={loading}
    >
      {title}
    </button>
  );
}
