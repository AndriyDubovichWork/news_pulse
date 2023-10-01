import React from 'react';
import style from './Title.module.scss';

type TitlePropsT = {
  title: string;
  className?: string;
  withRectangle?: boolean;
  onClick?: () => void;
};

function Title({
  title,
  className,
  withRectangle = true,
  onClick,
}: TitlePropsT) {
  return (
    <div className={`${style.title} ${className}`} onClick={onClick}>
      {withRectangle && <div className={style.rectangle} />}
      <h3>{title}</h3>
    </div>
  );
}

export default Title;
