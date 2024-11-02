import { DatePicker } from "antd";
import dayjs from "dayjs";
import { ReactNode } from "react";
import { Control, useController } from "react-hook-form";
import customParseFormat from "dayjs/plugin/customParseFormat";

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

  dayjs.extend(customParseFormat);

  return (
    <>
      {type === "date" ? (
        <DatePicker
          format={dateFormat}
          value={
            typeof field.value === "string" || typeof field.value === "number"
              ? dayjs(field.value).isValid()
                ? dayjs(field.value)
                : null
              : null
          }
          size="large"
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] ${className}`}
          onChange={(date) => {
            field.onChange(
              date
                ? date.format(dateFormat)
                : dayjs("1900-01-01").format(dateFormat)
            );
          }}
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
