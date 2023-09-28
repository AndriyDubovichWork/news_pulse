import React from 'react';
import style from './Team.module.scss';
import Title from '@/app/components/Title/Title';
import Image from 'next/image';

type MemberT = {
  position: string;
  name: string;
};

const members: MemberT[] = [
  { position: 'Designer', name: 'Behzad Pashaei' },
  { position: 'Programmer', name: 'Cassie Evans' },
  { position: 'Marketing', name: 'Louis Hoebregts' },
  { position: 'Administrative', name: 'Patricia' },
  { position: 'CEO', name: 'James Hoebregts' },
  { position: 'Financial', name: 'Jon Kantner' },
];

function Member({ member }: { member: MemberT }) {
  return (
    <div className={style.member}>
      <Image
        className={style.img}
        width={124}
        height={124}
        alt={member.name + 'image'}
        src={`https://random.imagecdn.app/124/124/?avoidCachingSoItwillBeDifferentImages=${member.name}`}
      />
      <p className={style.name}>{member.name}</p>
      <p className={style.position}>{member.position}</p>
    </div>
  );
}

function Team() {
  return (
    <>
      <Title title='News Pulse Team' className={style.title} />
      <div className={style.team}>
        {members.map((member) => {
          return <Member member={member} key={member.name} />;
        })}
      </div>
    </>
  );
}

export default Team;
