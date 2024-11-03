import { ReactNode, useState } from "react";

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
  disabled?: boolean

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
  disabled,
}: ButtonProps) {
  // State to track hover status
  const [isHovered, setIsHovered] = useState(false);

  // Background color based on button's color prop and disabled status
  const bgColor = disabled
    ? isHovered
      ? "rgba(255, 0, 0, 0.4)" // Red overlay when disabled and hovered
      : "bg-gray-400"
    : color === "secondary"
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
      <button
        type={type as "button" | "submit" | "reset"}
        className={`btn-component group ${bgColor} ${className}`}
        onClick={disabled || loading ? undefined : onClick}
        disabled={disabled || loading}
        style={{
          backgroundColor: bgColor, // Apply conditional background color
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        onMouseEnter={() => disabled && setIsHovered(true)} // Show red overlay on hover if disabled
        onMouseLeave={() => disabled && setIsHovered(false)} // Remove red overlay when not hovering
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
    </>
  );
}
