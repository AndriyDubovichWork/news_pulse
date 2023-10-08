import React from 'react';
import style from './snackBar.module.scss';

type snackBar = {
  message: string;
  close: () => void;
};

function SnackBar({ message, close }: snackBar) {
  return (
    <div className={style.snackBar} onClick={close}>
      {message}
    </div>
  );
}

export default SnackBar;
