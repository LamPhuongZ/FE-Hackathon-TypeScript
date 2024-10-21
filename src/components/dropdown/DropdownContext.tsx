import { createContext, useContext, useState, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};
const DropdownContext = createContext<
  | {
      show: boolean;
      setShow: React.Dispatch<React.SetStateAction<boolean>>;
      toggle: () => void;
    }
  | undefined
>(undefined);

function DropdownProvider({ children }: Props) {
  const [show, setShow] = useState<boolean>(false);
  const toggle = () => {
    setShow(!show);
  };
  const values = { show, setShow, toggle };
  return (
    <DropdownContext.Provider value={values}>
      {children}
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
