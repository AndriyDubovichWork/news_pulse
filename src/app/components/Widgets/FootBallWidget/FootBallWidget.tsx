import Image from 'next/image';
import React from 'react';
import style from './FootBallWidget.module.scss';
import calendar from './imgs/calendar.png';
import club from './imgs/club-table.png';
import competition from './imgs/competition.png';

export default function FootBallWidget() {
  const images = [calendar, club, competition];

  return (
    <div className={style.footBall}>
      <Image
        className={style.fieldImg}
        height={464}
        width={1920}
        src='https://c4.wallpaperflare.com/wallpaper/398/874/541/champions-league-stadium-wallpaper-preview.jpg'
        alt='socer field image'
      />
      <div className={style.content}>
        {images.map((imgSrc, id) => {
          const isMiddle = id === 1;

          return (
            <Image
              key={imgSrc.src}
              src={imgSrc}
              alt='football data images'
              className={`${isMiddle && style.middle}`}
            />
          );
        })}
      </div>
    </div>
  );
}
