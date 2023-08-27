import React, { useEffect, useState } from 'react';
import style from './CategoryHeader.module.scss';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import Title from '@/app/components/Title/Title';
import useSearchParams from '@/app/hooks/useSearchParams';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BiGridVertical } from 'react-icons/bi';

type CategoryHeaderPropsT = {
  category: string;
  shuffleNews: () => void;
  setIsGrid: React.Dispatch<React.SetStateAction<boolean>>;
  isGrid: boolean;
};

const byArray = ['New', 'Trendy', 'Popular', 'Top'];

export default function CategoryHeader({
  category,
  shuffleNews,
  setIsGrid,
  isGrid,
}: CategoryHeaderPropsT) {
  const { setParam, getParam } = useSearchParams();

  useEffect(() => {
    setParam('sortBy', byArray[0]);
  }, []);

  return (
    <header className={style.categoryHeader}>
      <div className={style.link}>
        <Link href='/'>Home</Link>
        <IoIosArrowForward />
        <p className={style.current}>{category}</p>
      </div>
      <div className={style.sort}>
        <div className={style.byLine}>
          {byArray.map((by) => {
            return (
              <p
                key={by}
                onClick={() => {
                  setParam('sortBy', by);
                  shuffleNews();
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
        <div className={style.type}>
          <div
            className={`${style.icon} ${!isGrid && style.active}`}
            onClick={() => setIsGrid(false)}
          >
            <BiGridVertical size={16} />
          </div>
          <div
            className={`${style.icon} ${isGrid && style.active}`}
            onClick={() => setIsGrid(true)}
          >
            <BsFillGrid3X3GapFill size={16} />
          </div>
        </div>
      </div>
      <Title title={`Category : ${category}`} className={style.title} />
    </header>
  );
}
