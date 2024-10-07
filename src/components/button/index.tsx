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
  color = "rgba(63, 140, 255, 0.63)",
  bgColor = "#6da2f139",
  borderColor = "transparent",
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
      className="p-2 text-base border border-solid rounded-md cursor-pointer transition-all duration-1000 hover:scale-90"
      onClick={onClick}
      disabled={loading}
    >
      {title}
    </button>
  );
}
