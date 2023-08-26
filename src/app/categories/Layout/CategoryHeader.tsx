import React, { useEffect, useState } from 'react';
import style from './CategoryHeader.module.scss';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import Title from '@/app/components/Title/Title';
import useSearchParams from '@/app/hooks/useSearchParams';
type CategoryHeaderPropsT = {
  category: string;
};

const byArray = ['New', 'Trendy', 'Popular', 'Top'];

export default function CategoryHeader({ category }: CategoryHeaderPropsT) {
  const { setParam, getParam } = useSearchParams();

  useEffect(() => {
    setParam('sortBy', byArray[0]);
  }, []);

  return (
    <header className={style.categoryHeader}>
      <div className={style.link}>
        <Link href='/'>Home</Link>
        <IoIosArrowForward />
        <p>{category}</p>
      </div>
      <div className={style.sort}>
        <div className={style.byLine}>
          {byArray.map((by) => {
            return (
              <p
                key={by}
                onClick={() => {
                  setParam('sortBy', by);
                }}
                className={
                  getParam('sortBy') === by ? style.selected : style.notSelected
                }
              >
                {by}
              </p>
            );
          })}
        </div>
      </div>
      <Title title={`Category : ${category}`} className={style.title} />
    </header>
  );
}
