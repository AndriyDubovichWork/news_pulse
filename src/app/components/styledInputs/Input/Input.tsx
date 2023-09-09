import React from 'react';
import style from './Input.module.scss';
function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <input {...props} className={`${style.input} ${props.className}`} />;
}

export default Input;
