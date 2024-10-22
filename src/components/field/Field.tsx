import { PropsWithChildren } from "react";

export default function Field({ children }: PropsWithChildren) {
  return (
    <div className="field">
      {children}
    </div>
  );
}
