import React, { ReactElement } from 'react';
import style from './IconWithText.module.scss';
function IconWithText({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement<any, any>;
}) {
  return (
    <div className={style.elem}>
      {icon}

      <p className={style.text}>{text}</p>
    </div>
  );
}

export default IconWithText;
