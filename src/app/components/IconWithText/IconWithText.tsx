import React, { ReactElement } from 'react';
import style from './IconWithText.module.scss';
function IconWithText({
  text,
  icon,
  textClassName,
}: {
  text: string;
  icon: ReactElement<any, any>;
  textClassName?: string;
}) {
  return (
    <div className={style.elem}>
      {icon}

      <p className={`${style.text} ${textClassName}`}>{text}</p>
    </div>
  );
}

export default IconWithText;
