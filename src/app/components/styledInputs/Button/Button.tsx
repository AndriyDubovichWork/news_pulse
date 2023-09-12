import React from "react";
import Input from "../Input/Input";
import style from "./Button.module.scss";

function Button({
  value,
  className,
  isHihglighted = true,
  ...props
}: { isHihglighted?: boolean } & React.HTMLProps<HTMLInputElement>) {
  return (
    <Input
      {...props}
      type="button"
      value={value}
      className={`${
        isHihglighted ? style.highLightedButton : style.button
      } ${className}`}
    />
  );
}

export default Button;
