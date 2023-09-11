import React from "react";
import Input from "../Input/Input";
import style from "./Button.module.scss";

function Button({
  value,
  className,
  ...props
}: React.HTMLProps<HTMLInputElement>) {
  return (
    <Input
      {...props}
      type="button"
      value={value}
      className={`${style.button} ${className}`}
    />
  );
}

export default Button;
