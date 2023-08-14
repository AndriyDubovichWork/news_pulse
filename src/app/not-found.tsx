import React from 'react';
import style from './not-found.module.scss';
export default function notFound() {
  return (
    <div className={style.notFound}>
      <h1 className={style.errorCode}>404</h1>
      <h5>OOPS! Page you're looking for doesn't exist</h5>
    </div>
  );
}
