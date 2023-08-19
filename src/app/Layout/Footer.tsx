import React from 'react';
import style from './footer.module.scss';
import useCategories from '../hooks/useCategories';

function TitleSection({ title }: { title: string }) {
  return <h3>{title}</h3>;
}

export default function Footer() {
  const categories = useCategories();
  return (
    <footer className={style.footer}>
      <div className={style.footerSection}>
        <div className={style.megaNews}>
          <TitleSection title='Mega News' />
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
          <TitleSection title='Mega News' />

          {categories.map((category) => (
            <p>{category}</p>
          ))}
        </div>
      </div>
    </footer>
  );
}
