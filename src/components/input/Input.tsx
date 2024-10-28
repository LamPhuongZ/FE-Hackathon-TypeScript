import { DatePicker } from "antd";
import { ReactNode } from "react";
import { Control, useController } from "react-hook-form";
import { useState } from "react";
import IconEyeOpen from "../iconEye/IconEyeOpen";
import IconEyeClose from "../iconEye/IconEyeClose";

type Props = {
  name: string;
  type?: string;
  children?: ReactNode;
  placeholder?: string;
  className?: string;
  control?: object;
  disabled?: boolean;
  min?: number;
  max?: number;
  dateFormat?: string;
  rules?: object; // Validation rules cho react-hook-form
};

export default function Input({
  name = "",
  type = "text",
  placeholder,
  children,
  control,
  className,
  disabled = false,
  min,
  max,
  dateFormat = "YYYY-DD-MM",
  rules = {}, // Nhận các rule kiểm tra đầu vào
}: Props) {
  const { field } = useController({
    control: control as Control<Props>,
    name: name as keyof Props,
    rules: {
      ...rules,
      min: min
        ? { value: min, message: `Giá trị tối thiểu là ${min}` }
        : undefined,
      max: max
        ? { value: max, message: `Giá trị tối đa là ${max}` }
        : undefined,
      validate: (value) =>
        !isNaN(Number(value)) || "Giá trị phải là một số hợp lệ",
    },

    defaultValue: "",
  });

  const [togglePassword, setTogglePassword] = useState(false);

  return (
    <>
      {type === "date" ? (
        <DatePicker
          format={dateFormat}
          size="large"
          {...field}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] ${className}`}
        />
      ) : type === "tel" ? (
        <>
          <input
            id={name}
            type="tel"
            {...field}
            pattern="[0-9]*"
            disabled={disabled}
            className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:outline-none focus:ring-1 ${className}`}
            placeholder={placeholder}
            value={field.value as string}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, ""); // Xóa ký tự không phải số
              field.onChange(value); // Cập nhật giá trị hợp lệ
            }}
          />
        </>
      ) : type === "number" ? (
        <>
          <input
            id={name}
            type="number"
            {...field}
            disabled={disabled}
            min={min}
            max={max}
            className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:outline-none focus:ring-1 ${className}`}
            placeholder={placeholder}
            value={field.value as string}
          />
        </>
      ) : type === "password" ? (
        <>
          <input
            id={name}
            type={togglePassword ? "text" : "password"} // Toggle giữa text và password
            {...field}
            disabled={disabled}
            className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:outline-none focus:ring-1 ${className}`}
            placeholder={placeholder}
            value={field.value as string}
          />
          {!togglePassword ? (
            <IconEyeClose
              onClick={() => setTogglePassword(true)}
            ></IconEyeClose>
          ) : (
            <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
          )}
        </>
      ) : (
        <input
          id={name}
          type={type}
          {...field}
          disabled={disabled}
          className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:outline-none focus:ring-1 ${className}`}
          placeholder={placeholder}
          value={field.value as string}
        >
          {children}
        </input>
      )}
    </>
  );
}
