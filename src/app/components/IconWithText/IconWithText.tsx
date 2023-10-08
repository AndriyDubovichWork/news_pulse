import React, { ReactElement } from 'react';
import style from './IconWithText.module.scss';

type iconWithText = {
  text: string;
  icon: ReactElement<any, any>;
  textClassName?: string;
  containerClassName?: string;
};

function IconWithText({
  text,
  icon,
  containerClassName,
  textClassName,
}: iconWithText) {
  return (
    <div className={`${style.elem} ${containerClassName}`}>
      {icon}

      <p className={`${style.text} ${textClassName}`}>{text}</p>
    </div>
  );
}

export default IconWithText;
