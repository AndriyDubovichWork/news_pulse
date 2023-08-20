import React from 'react';
import style from './Title.module.scss';

function Title({ title }: { title: string }) {
  return (
    <div className={style.title}>
      <div className={style.rectangle} />
      <h3>{title}</h3>
    </div>
  );
}

export default Title;
