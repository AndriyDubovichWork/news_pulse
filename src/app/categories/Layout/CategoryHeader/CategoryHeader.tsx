import React, { useEffect, useState } from 'react';
import style from './CategoryHeader.module.scss';
import Title from '@/app/components/Title/Title';
import useSearchParams from '@/app/hooks/useSearchParams';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { BiGridVertical } from 'react-icons/bi';
import ArrowedLink from '@/app/components/ArrowedLink/ArrowedLink';
import useWidth from '@/app/hooks/useWidth';

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
  const { isWideScreen } = useWidth();
  useEffect(() => {
    setParam('sortBy', byArray[0]);
  }, []);

  return (
    <header className={style.categoryHeader}>
      <ArrowedLink current={category} />
      <div className={style.sort}>
        <div className={`${style.byLine} ${!isWideScreen && style.small}`}>
          {byArray.map((by) => {
            const isSelected = by === getParam('sortBy');
            return (
              <p
                key={by}
                onClick={() => {
                  if (!isSelected) {
                    setParam('sortBy', by);
                    shuffleNews();
                  }
                }}
                className={isSelected ? style.selected : style.notSelected}
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
