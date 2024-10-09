import { ReactNode } from "react";

type ButtonProps = {
  title: string | ReactNode;
  loading?: boolean;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  margin?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
};

/**
 *
 * @type  title: string | ReactNode;
  loading?: boolean;
  color?: string;
  bgColor?: string;
  borderColor?: string;
  margin?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
 */

export default function Button({
  title,
  loading,
  color = "rgba(63, 140, 255, 0.63)",
  bgColor = "#6da2f139",
  borderColor = "transparent",
  margin,
  onClick,
  icon,
  iconPosition = "left",
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
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {title}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
}
