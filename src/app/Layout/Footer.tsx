import React from 'react';
import style from './footer.module.scss';
import useCategories from '../hooks/useCategories';
import Input from '../components/Input/Input';
import Image from 'next/image';
import Title from '../components/Title/Title';

function Icon({ src, name }: { src: string; name: string }) {
  return <Image width={40} height={40} src={src} alt={`${name} icon`} />;
}

export default function Footer() {
  const categories = useCategories();
  return (
    <footer className={style.footer}>
      <div className={style.leftfooterSection}>
        <div className={style.megaNews}>
          <Title title='Mega News' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas
            purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris
            rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed
            euismod nisi porta lorem mollis. Morbi tristique senectus et netus.
            Mattis pellentesque id nibh tortor id aliquet lectus proin
          </p>
        </div>

        <div className={style.categories}>
          <Title title='Mega News' />

          {categories.map((category) => (
            <p>{category}</p>
          ))}
        </div>

        <div className={style.newsLetters}>
          <Title title='Newsletters' />
          <Input
            placeholder='Write your email ..'
            style={{ width: '100%', height: '6vh' }}
          />
        </div>

        <div className={style.socialNetwork}>
          <Title title='Social Network' />
          <Icon
            name='instagram'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
          />
          <Icon
            name='facebook'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png'
          />
        </div>

        <div className={style.copyright}>
          <p>Privacy Policy | Terms & Conditions</p>
          <p>All Copyright (c) 2022 Reserved</p>
        </div>
      </div>

      <div className={style.newComents}>
        <Title title='New Comments' />
      </div>
    </footer>
  );
}
