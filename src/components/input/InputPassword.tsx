import React, { useState } from "react";
import Input from "./Input";
import IconEyeOpen from "../iconEye/IconEyeOpen";
import IconEyeClose from "../iconEye/IconEyeClose";

type Props = {
  control?: object;
  name?: string;
  placeholder?: string;
};

export default function InputPassword({ control, name="", placeholder }: Props) {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Input
      type= {togglePassword ? "text" : "password"}
      name={name}
      placeholder={placeholder}
      control={control}
    >
       {!togglePassword ? (
          <IconEyeClose onClick={() => setTogglePassword(true)}></IconEyeClose>
        ) : (
          <IconEyeOpen onClick={() => setTogglePassword(false)}></IconEyeOpen>
        )}
    </Input>
  );
}
