import React from 'react';
import style from './Input.module.scss';
function Input(
  props: React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  return <input {...props} className={style.input} />;
}

export default Input;
