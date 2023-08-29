import React from 'react';
import style from './Info.module.scss';
import Image from 'next/image';
import Title from '@/app/components/Title/Title';
import IconWithText from '@/app/components/IconWithText/IconWithText';

import { MdEmail } from 'react-icons/md';
import { GiSmartphone } from 'react-icons/gi';
import { FaFax } from 'react-icons/fa';
import { BiCurrentLocation } from 'react-icons/bi';

function ContactInfo() {
  const contacts = [
    {
      title: 'email : Management@news.pulse',
      icon: <MdEmail size={16} />,
    },
    {
      title: 'Phone number : +1(234) 567-8910',
      icon: <GiSmartphone size={16} />,
    },
    {
      title: 'fax : +1(234) 567-8910',
      icon: <FaFax size={16} />,
    },
    {
      title: 'Address : 1234 Foxrun St.New Lenox, IL 123456',
      icon: <BiCurrentLocation size={16} />,
    },
  ];
  return (
    <div className={style.contact}>
      <Title title='News Pulse Information' />

      {contacts.map((contact) => {
        return <IconWithText text={contact.title} icon={contact.icon} />;
      })}
    </div>
  );
}

export default function Info() {
  return (
    <div className={style.info}>
      <Image
        className={style.map}
        width={840}
        height={300}
        src={
          'https://gisgeography.com/wp-content/uploads/2020/06/New-York-City-Road-Map.jpg'
        }
        alt='new york map image'
      />
      <ContactInfo />
    </div>
  );
}
