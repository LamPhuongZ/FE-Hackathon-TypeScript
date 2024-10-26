import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useRef,
  useEffect,
} from "react";

type Props = {
  children?: ReactNode;
};
const DropdownContext = createContext<
  | {
      show: boolean;
      setShow: React.Dispatch<React.SetStateAction<boolean>>;
      toggle: () => void;
      closeDropdown: () => void;
    }
  | undefined
>(undefined);

function DropdownProvider({ children }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // tham chiếu đến dropdown

  const toggle = () => {
    setShow((prev) => !prev);
  };

  const closeDropdown = () => {
    setShow(false);
  };

  // lắng nghe sự kiện bên ngoài dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        closeDropdown();
      }
    };

    // gắn sự kiện vào window
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside); // gỡ bỏ sự kiện khi unmount
    };
  }, []);

  const values = { show, setShow, toggle, closeDropdown };
  return (
    <DropdownContext.Provider value={values}>
      <div className="w-full" ref={dropdownRef}>{children}</div>
    </DropdownContext.Provider>
  );
}
function useDropdown() {
  const context = useContext(DropdownContext);
  if (typeof context === "undefined")
    throw new Error("useDropdown must be used within DropdownProvider");
  return context;
}
export { useDropdown, DropdownProvider };
