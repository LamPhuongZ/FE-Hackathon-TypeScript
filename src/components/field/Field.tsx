import { ReactNode } from "react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export default function Field({ children, className }: Props) {
  return <div className={`field ${className}`}>{children}</div>;
}
