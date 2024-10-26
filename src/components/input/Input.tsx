import { DatePicker } from "antd";
import { Control, useController } from "react-hook-form";

type Props = {
  name: string;
  type?: string;
  content?: string;
  placeholder?: string;
  className?: string;
  control?: object;
  disabled?: boolean;
  min?: number;
  max?: number;
  rules?: object; // Validation rules cho react-hook-form
};

export default function Input({
  name = "",
  type = "text",
  placeholder,
  content,
  control,
  className,
  disabled = false,
  min,
  max,
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
  return (
    <>
      {type === "date" ? (
        <DatePicker
          format="DD-MM-YYYY" // fortmat="DD-MM-YYYY"
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
            disabled={disabled}
            className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:outline-none focus:ring-1 ${className}`}
            placeholder={placeholder}
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            value={field.value as string}
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
          {content}
        </input>
      )}
    </>
  );
}
