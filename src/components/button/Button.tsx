import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface ButtonProps {
  title?: string | ReactNode;
  loading?: boolean;
  className?: string;
  type?: string;
  onClick?: () => void;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  color?: "primary" | "secondary" | "delete" | "update" | "custom";
  circle?: boolean;
  disabled?: boolean;
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

  *Note: width and height are self-defined
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
  circle = true,
  to,
}: ButtonProps & { to?: string }) {
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

  // Thêm biến để chứa các div circle
  const circles = (
    <>
      <div className="circle-1 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div>
      <div className="circle-2 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div>
      <div className="circle-3 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div>
      <div className="circle-4 group-hover:top-1 group-hover:right-2 group-hover:scale-150"></div>
    </>
  );

  return (
   <>
      {to ? ( // Kiểm tra nếu có prop to
        <NavLink
          to={to}
          className={`btn-component group ${bgColor} ${className}`}
          onClick={onClick}
        >
          {circle && circles}
          <span className="relative z-20">
            {icon && iconPosition === "left" && (
              <span className="mr-2">{icon}</span>
            )}
            {title}
            {icon && iconPosition === "right" && (
              <span className="ml-2">{icon}</span>
            )}
          </span>
        </NavLink>
      ) : ( // Nếu không có prop to, sử dụng button thông thường
        <button
          type={type as "button" | "submit" | "reset"}
          className={`btn-component group ${bgColor} ${className}`}
          onClick={onClick}
          disabled={loading}
        >
          {circle && circles} {/* Hiển thị các div circle khi circle là true */}
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
      )}
    </>
  );
}