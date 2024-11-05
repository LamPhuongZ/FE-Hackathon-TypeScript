import { useDropdown } from "./DropdownContext";

type Props = {
  value?: string;
};

export default function DropdownSelect({ value = "" }: Props) {
  const { toggle, show } = useDropdown();
  return (
    <div
      className={`flex items-center justify-between px-[20px] py-[16px] border border-solid border-[#DFDFDF] rounded-lg cursor-pointer font-medium`}
      onClick={toggle}
    >
      <span>{value}</span>
      <span>
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 15l7-7 7 7"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </span>
    </div>
  );
}
