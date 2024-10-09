import React, { PropsWithChildren } from "react";

type Props = {};

export default function Field({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-start gap-x-5 mb-5 last-of-type:mb-0">
      {children}
    </div>
  );
}
