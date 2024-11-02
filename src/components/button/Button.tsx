import axios from "axios";
import { ReactNode, useEffect, useState } from "react";
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
  disabled,
}: ButtonProps & { to?: string }) {
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    const isApplied = localStorage.getItem("applied");
    if (isApplied === "true") {
      setApplied(true);
    }
  }, []);

 const handleClick = async (jobId:number) => {
   if (!applied) {
     setApplied(true);
     localStorage.setItem("applied", "true"); // Lưu trạng thái vào localStorage

     // Ghi lên API backend với axios
     try {
       await axios.post(`https://api.easyjob.io.vn/api/v1/apply-job/${jobId}`); 
     } catch (error) {
       console.error("Lỗi khi gửi yêu cầu:", error); 
     }
   }
 };

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
          className={`btn-component group ${bgColor} ${className} ${applied ? 'bg-gray-500' : ''}`}
          onClick={applied ? undefined : handleClick}
        >
          {applied ? "Đã ứng tuyển" : title}
          {/* {circle && circles} */}
          <span className="relative z-20">
            {applied ? null : (
              <>
                {icon && iconPosition === "left" && (
                  <span className="mr-2">{icon}</span>
                )}
                {icon && iconPosition === "right" && (
                  <span className="ml-2">{icon}</span>
                )}
              </>
            )}
          </span>
        </NavLink>
      ) : ( // Nếu không có prop to, sử dụng button thông thường
        <button
          type={type as "button" | "submit" | "reset"}
          className={`btn-component group ${bgColor} ${className} ${applied ? 'bg-gray-500' : ''}`}
          onClick={applied ? undefined : handleClick}
          disabled={loading || applied}
        >
          {applied ? "Đã ứng tuyển" : title}
          <span className="relative z-20">
            {applied ? null : (
              <>
                {icon && iconPosition === "left" && (
                  <span className="mr-2">{icon}</span>
                )}
                {icon && iconPosition === "right" && (
                  <span className="ml-2">{icon}</span>
                )}
              </>
            )}
          </span>
        </button>
      )}
    </>
  );
}