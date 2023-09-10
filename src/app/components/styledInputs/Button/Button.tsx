import React from "react";
import Input from "../Input/Input";
import style from "./Button.module.scss";

type ButtonPropT = {
  value: string;
  className?: string;
};

function Button({ value, className }: ButtonPropT) {
  return (
    <Input
      type="button"
      value={value}
      className={`${style.button} ${className}`}
    />
  );
}

export default Button;
