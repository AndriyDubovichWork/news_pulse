import usePaginationBoundaries from '@/app/hooks/usePaginationBoundaries';
import React, { useState } from 'react';
import Button from '../styledInputs/Button/Button';
import style from './Paginator.module.scss';

type PaginatorPropsT = {
  shuffleNews: () => void;
};

export default function Paginator({ shuffleNews }: PaginatorPropsT) {
  const { disabled, boundaries, moveRight, moveLeft } = usePaginationBoundaries(
    9,
    4
  );

  return (
    <div className={style.pagination}>
      <Button
        value='prev'
        onClick={() => {
          moveLeft();
          shuffleNews();
        }}
        disabled={disabled.left}
      />

      <h4 className={style.page}>{boundaries.left + 1}</h4>
      <h4 className={style.page}>{boundaries.left + 2}</h4>
      <h4 className={style.page}>{boundaries.left + 3}</h4>
      <h4 className={style.page}>{boundaries.right + 1}</h4>

      <Button
        value='next'
        onClick={() => {
          moveRight();
          shuffleNews();
        }}
        disabled={disabled.right}
      />
    </div>
  );
}
