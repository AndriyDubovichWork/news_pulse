import React from 'react';
import style from './error.module.scss';

type errorT = {
  message?: string;
  Heightvh?: number;
};

export default function Error({
  message = 'something went wrong',
  Heightvh,
}: errorT) {
  return (
    <div className={style.error} style={{ height: `${Heightvh}vh` }}>
      <h3 className={style.message}>{message}</h3>
    </div>
  );
}
