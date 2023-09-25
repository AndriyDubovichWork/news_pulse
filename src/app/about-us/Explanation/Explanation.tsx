import React from 'react';
import style from './Explanation.module.scss';
import Image from 'next/image';

export default function Explanation({
  isWideScreen,
}: {
  isWideScreen: boolean;
}) {
  return (
    <div className={style.explanation}>
      <h1 className={style.title}>
        We pay attention to your needs and do the best design.
      </h1>
      <div className={`${style.content} ${!isWideScreen && style.small}`}>
        <p className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
          purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
          euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
          Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien
          faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper
          velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius
          duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam
          maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti
          nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet
          facilisis magna. Dignissim diam quis enim lobortis scelerisque
          fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare
          lectus sit amet est placerat in egestas erat.
        </p>

        <Image
          className={style.img}
          width={744}
          height={444}
          alt='video img'
          src={
            'https://prod-images.dacast.com/wp-content/uploads/2022/11/video-playyer-html5.jpeg'
          }
        />
      </div>
    </div>
  );
}
