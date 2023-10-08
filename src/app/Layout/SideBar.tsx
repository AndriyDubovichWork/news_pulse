import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import style from './sideBar.module.scss';
import { useRouter } from 'next/navigation';
import Title from '../components/Title/Title';

type sideBar = {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SideBar({ setIsSidebarOpen }: sideBar) {
  const { push } = useRouter();
  const closeAndRedirect = (url: string) => {
    push(url);
    setIsSidebarOpen(false);
  };
  return (
    <div className={style.sideBar}>
      <header>
        <h1 className={style.title} onClick={() => closeAndRedirect('/')}>
          News Pulse
        </h1>
        <AiOutlineClose
          className={style.close}
          onClick={() => setIsSidebarOpen(false)}
        />
      </header>
      <div className={style.content}>
        <Title
          title='Contact Us'
          withRectangle={false}
          className={style.link}
          onClick={() => closeAndRedirect('/contact-us')}
        />
        <Title
          title='About Us'
          withRectangle={false}
          onClick={() => closeAndRedirect('/about-us')}
          className={style.link}
        />
      </div>
    </div>
  );
}
