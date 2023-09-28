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

  const pages = Array.from(Array(boundaries.right + 1).keys());

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
      {pages.map((page) => {
        return <h4 className={style.page}>{page + 1}</h4>;
      })}

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
