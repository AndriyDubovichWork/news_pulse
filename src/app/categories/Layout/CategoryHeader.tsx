import React, { useEffect, useState } from 'react';
import style from './CategoryHeader.module.scss';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import Title from '@/app/components/Title/Title';
import { useSearchParams } from 'next/navigation';
import useUpdateSearchParams from '@/app/hooks/useUpdateSearchParams';
type CategoryHeaderPropsT = {
  category: string;
};

const byArray = ['New', 'Trendy', 'Popular', 'Top'];

export default function CategoryHeader({ category }: CategoryHeaderPropsT) {
  const [selectedSort, setSelectedSort] = useState(byArray[0]);
  const updateParam = useUpdateSearchParams();

  useEffect(() => {
    updateParam('sortBy', selectedSort);
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
                onClick={() => {
                  updateParam('sortBy', by);
                  setSelectedSort(by);
                }}
                className={
                  selectedSort === by ? style.selected : style.notSelected
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
