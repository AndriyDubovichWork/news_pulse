import React from 'react';
import style from './Title.module.scss';

function Title({ title, className }: { title: string; className?: string }) {
  return (
    <div className={`${style.title} ${className}`}>
      <div className={style.rectangle} />
      <h3>{title}</h3>
    </div>
  );
}

export default Title;
