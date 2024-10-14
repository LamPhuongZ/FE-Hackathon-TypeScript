import { ReactNode } from "react";

interface ButtonProps {
  title?: string | ReactNode;
  loading?: boolean;
  className?: string;
  type?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  color?: "primary" | "secondary" | "delete" | "update";
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
  color?: "primary" | "secondary" | "delete" | "update";

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
  color = "primary",
}: ButtonProps) {
  const bgColor =
    color === "secondary"
      ? "btn-secondary"
      : color === "delete"
      ? "btn-delete"
      : color === "update"
      ? "btn-update"
      : "btn-primary";

  return (
    <button
      type={type as "button" | "submit" | "reset"}
      className={`btn-component ${bgColor} ${className}`}
      onClick={onClick}
      disabled={loading}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {title}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
}
