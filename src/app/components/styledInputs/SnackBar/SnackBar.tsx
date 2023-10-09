import React from 'react';
import style from './snackBar.module.scss';
import { AiOutlineClose } from 'react-icons/ai';

type snackBar = {
  isShown: boolean;
  message: string;
  condition?: 'neutral' | 'positive' | 'negative';
  close: () => void;
};

function SnackBar({
  message,
  close,
  condition = 'neutral',
  isShown,
}: snackBar) {
  return (
    <div
      className={`${style.snackBar} ${style[condition]} ${
        !isShown && style.hidden
      }`}
    >
      {message}
      <AiOutlineClose onClick={close} className={style.close} />
    </div>
  );
}

export default SnackBar;
