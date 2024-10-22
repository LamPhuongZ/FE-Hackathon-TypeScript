import { Control, useController } from "react-hook-form";

type Props = {
  content?: string;
  placeholder?: string;
  className?: string;
  control?: object;
  name: string;
};

export default function Textarea({
  name = "",
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
    <div className="relative w-full">
      <textarea
        id={name}
        {...field}
        className={`w-full py-4 px-5 rounded-lg font-medium transition-all border border-solid border-[#DFDFDF] resize-none min-h-[200px] focus:outline-none focus:ring-1 focus:ring-[#3F8CFF] ${className}`}
        placeholder={placeholder}
        value={field.value as string}
      >
        {content}
      </textarea>
    </div>
  );
}
