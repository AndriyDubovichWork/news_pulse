import { ReactElement } from 'react';
import style from './UserInput.module.scss';
import Title from '../Title/Title';

export default function UserInput({
  title,
  input,
  isWide,
}: {
  input: ReactElement<any, any>;
  title: string;
  isWide?: boolean;
}) {
  return (
    <div className={isWide ? style.wide : ''}>
      <Title title={title} withRectangle={false} />
      {input}
    </div>
  );
}
