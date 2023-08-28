import React from 'react';
import style from './loading.module.scss';
// TODO
export default function Loading() {
  return (
    <div className={style.loading}>
      <h1 className={style.logo}>News Pulse</h1>
      <div className={style.loaderLine}></div>
    </div>
  );
}
