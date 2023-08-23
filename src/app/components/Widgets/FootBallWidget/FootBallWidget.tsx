import Image from 'next/image';
import React from 'react';
import style from './FootBallWidget.module.scss';
export default function FootBallWidget() {
  return (
    <div className={style.footBall}>
      <Image
        className={style.fieldImg}
        height={464}
        width={1920}
        src='https://c4.wallpaperflare.com/wallpaper/398/874/541/champions-league-stadium-wallpaper-preview.jpg'
        alt='socer field image'
      />
      
    </div>
  );
}
