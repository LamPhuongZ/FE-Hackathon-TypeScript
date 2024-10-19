import { ReactNode } from "react";

interface ButtonProps {
  title?: string | ReactNode;
  loading?: boolean;
  className?: string;
  type?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  color?: "primary" | "secondary" | "delete" | "update" | "custom";
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
  color?: "primary" | "secondary" | "delete" | "update" | "custom";

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
      : color === "custom"
      ? "btn-custom"
      : "btn-primary";

  return (
    <button
      type={type as "button" | "submit" | "reset"}
      className={`btn-component group ${bgColor} ${className}`}
      onClick={onClick}
      disabled={loading}
    >
      <div className="circle-1 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div>
      <div className="circle-2 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div>
      <div className="circle-3 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div>
      <div className="circle-4 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div>

      <span className="relative z-20">
        {icon && iconPosition === "left" && (
          <span className="mr-2">{icon}</span>
        )}
        {title}
        {icon && iconPosition === "right" && (
          <span className="ml-2">{icon}</span>
        )}
      </span>
    </button>
  );
}
