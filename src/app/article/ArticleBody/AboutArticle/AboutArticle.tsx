import React, { ReactElement } from 'react';
import style from './AboutArticle.module.scss';
import { BsCalendarDate } from 'react-icons/bs';
import { FaRegCommentDots } from 'react-icons/fa';
import { AiOutlineFolder } from 'react-icons/ai';

function AboutArticleElem({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement<any, any>;
}) {
  return (
    <div className={style.elem}>
      {icon}

      <p className={style.text}>{text}</p>
    </div>
  );
}

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
      <AboutArticleElem text={date} icon={<BsCalendarDate />} />
      <AboutArticleElem
        text={`Comments : ${coments}`}
        icon={<FaRegCommentDots />}
      />
      <AboutArticleElem
        text={`Category : ${category}`}
        icon={<AiOutlineFolder />}
      />
    </div>
  );
}
