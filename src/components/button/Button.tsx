import { ReactNode } from "react";

interface ButtonProps {
  title: string | ReactNode;
  loading?: boolean;
  className?: string;
  type?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}

/**
 *
 * @interface  
 * title: string | ReactNode;
  loading?: boolean;
  className?: string;
  type?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";

  *Note: width and height width and height are self-defined
 */

export default function Button({
  title,
  loading,
  className,
  type = "button",
  onClick,
  icon,
  iconPosition = "left",
}: ButtonProps) {
  return (
    <button
      type={type as "button" | "submit" | "reset"}
      className={`cursor-pointer transition-all bg-[#3F8CFF] text-white px-6 py-2 rounded-xl
    border-blue-600
    border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
    active:border-b-[2px] active:brightness-90 active:translate-y-[2px] text-2xl font-bold ${className}`}
      onClick={onClick}
      disabled={loading}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {title}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
}
