import React, { ReactElement } from 'react';
import style from './IconWithText.module.scss';

type iconWithText = {
  text: string;
  icon: ReactElement<any, any>;
  textClassName?: string;
};

function IconWithText({ text, icon, textClassName }: iconWithText) {
  return (
    <div className={`${style.elem} ${textClassName}`}>
      {icon}

      <p className={`${style.text} ${textClassName}`}>{text}</p>
    </div>
  );
}

export default IconWithText;
