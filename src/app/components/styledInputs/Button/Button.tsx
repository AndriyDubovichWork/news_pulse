'use client';

import React, { useState } from 'react';
import Input from '../Input/Input';
import style from './Button.module.scss';
import SnackBar from '../SnackBar/SnackBar';

function Button({
  value,
  className,
  snackBar,
  isHihglighted = true,
  ...props
}: {
  isHihglighted?: boolean;
  snackBar?: { message: string; condition?: ConditionT };
} & React.HTMLProps<HTMLInputElement>) {
  const [showSnackBar, setShowSnackBar] = useState(false);
  return (
    <>
      <Input
        onClick={() => {
          setTimeout(() => {
            setShowSnackBar(false);
          }, 1000 * 5);
          setShowSnackBar(true);
        }}
        {...props}
        type='button'
        value={value}
        className={`${
          isHihglighted ? style.highLightedButton : style.button
        } ${className}`}
      />
      {snackBar?.message && (
        <SnackBar
          isShown={showSnackBar}
          message={snackBar.message}
          condition={snackBar.condition || 'positive'}
          close={() => setShowSnackBar(false)}
        />
      )}
    </>
  );
}

export default Button;
