'use client';

import React, { useState } from 'react';
import Input from '../Input/Input';
import style from './Button.module.scss';
import SnackBar from '../SnackBar/SnackBar';

function Button({
  value,
  className,
  snackBarMessage,
  isHihglighted = true,
  ...props
}: {
  isHihglighted?: boolean;
  snackBarMessage?: string;
} & React.HTMLProps<HTMLInputElement>) {
  const [showSnackBar, setShowSnackBar] = useState(false);
  return (
    <>
      <Input
        onClick={() => setShowSnackBar(true)}
        {...props}
        type='button'
        value={value}
        className={`${
          isHihglighted ? style.highLightedButton : style.button
        } ${className}`}
      />
      {showSnackBar && snackBarMessage && (
        <SnackBar
          message={snackBarMessage}
          close={() => setShowSnackBar(false)}
        />
      )}
    </>
  );
}

export default Button;
