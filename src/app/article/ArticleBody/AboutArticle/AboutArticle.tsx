import React, { ReactElement } from 'react';
import style from './AboutArticle.module.scss';
import { BsCalendarDate } from 'react-icons/bs';
import { FaRegCommentDots } from 'react-icons/fa';
import { AiOutlineFolder } from 'react-icons/ai';
import IconWithText from '@/app/components/IconWithText/IconWithText';

type AboutArticlePropsT = {
  date: string;
  category: string;
  coments: number;
};

export default function AboutArticle({
  date,
  category,
  coments,
}: AboutArticlePropsT) {
  return (
    <div className={style.about}>
      <IconWithText text={date} icon={<BsCalendarDate />} />
      <IconWithText
        text={`Comments : ${coments}`}
        icon={<FaRegCommentDots />}
      />
      <IconWithText
        text={`Category : ${category}`}
        icon={<AiOutlineFolder />}
      />
    </div>
  );
}
