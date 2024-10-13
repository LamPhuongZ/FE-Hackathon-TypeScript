import { DatePicker } from "antd";
import { Control, useController } from "react-hook-form";

type Props = {
  name: string;
  type?: string;
  content?: string;
  placeholder: string;
  className?: string;
  control?: object;
};

export default function Input({
  name = "",
  type = "text",
  placeholder,
  content,
  control,
  className,
}: Props) {
  const { field } = useController({
    control: control as Control<Props>,
    name: name as keyof Props,
    defaultValue: "",
  });
  return (
    <>
      {type === "date" ? (
        <DatePicker
          format={{
            format: "DD-MM-YYYY",
            type: "mask",
          }}
          size="large"
          {...field}
          placeholder={placeholder}
          className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:outline-none focus:ring-1 focus:ring-[#3F8CFF] ${className}`}
        />
      ) : (
        <input
          id={name}
          type={type}
          {...field}
          className={`w-full px-[20px] py-[16px] rounded-lg font-medium border border-solid border-[#DFDFDF] focus:outline-none focus:ring-1 focus:ring-[#3F8CFF] ${className}`}
          placeholder={placeholder}
          value={field.value as string}
        >
          {content}
        </input>
      )}
    </>
  );
}